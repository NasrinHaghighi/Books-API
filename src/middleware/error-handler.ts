const errorHandlerMiddleware = async (err: any, req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { msg: string }): any; new(): any } } }, next: any) => {
  console.log(err)
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware