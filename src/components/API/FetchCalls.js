export const fetchComments = async (number) => {
  const req = await fetch(`http://localhost:8088/comments/${number}`)
  const resp = await req.json()
  return resp
}

export const fetchDefaultComment = async () => {
  const req = await fetch(`http://localhost:8088/defaultComment/1`)
  const resp = await req.json()
  return resp
}