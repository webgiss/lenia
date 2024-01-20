const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchIdentityCount = async (amount = 1) => {
    // const response = await fetch('http://localhost:3000/api/identity-count', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ amount }),
    // })
    // const result = await response.json()

    await delay(1000)
    const result = { data: amount }

    return result
}
