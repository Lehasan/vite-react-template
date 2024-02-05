import { useEffect, useState } from "react"

export const useFetch = (url, { method = 'GET', headers, body } = {}) => {
	const [data, setData] = useState(null)
	const [status, setStatus] = useState({
		error: false,
		loading: true
	})

	useEffect(() => {
		const fetchRequest = async () => {
			try {
				if (!url) throw new Error('useFetch: No URL address')

				const response = await fetch(url, { method, headers, body })

				if (!response.ok) {
					const { message } = JSON.parse(await response.text())
					throw new Error(`Status ${response.status}: ${message} `)
				}

				setData(await response.json())
				setStatus(prevStatus => ({ ...prevStatus, loading: false }))
			} catch (error) {
				setStatus({ error: true, loading: false })
				console.error(error)
			}
		}

		fetchRequest()
	}, [url, method, headers, body])

	return { data, ...status }
}