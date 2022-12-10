export const fetchUserLocations = async () => {
    const req = await fetch(`http://localhost:8088/usersSavedLocations?_expand=tags`)
    const resp = await req.json()
    return resp
  }