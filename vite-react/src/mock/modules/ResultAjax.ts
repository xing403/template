class ResultAjax<T> {
  code:number = 0
  data: T | null = null
  message:string = ''
  success = (data: T) => {
    this.data = data
    this.code = 200
    this.message = 'success'
    return this
  }
  fail = (message: string) => {
    this.message = message
    this.code = 500
    return this
  }
}

export default new ResultAjax()
