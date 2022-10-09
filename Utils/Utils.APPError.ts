export default class AppError extends Error {
  private m_ok: boolean;
  private m_msg: string;
  private m_statusCode: number;
  private m_status: string;
  private m_isOperational: boolean;

  constructor(p_message: string, p_statusCode: number) {
    super(p_message);

    this.m_ok = true;
    this.m_msg = p_message;
    this.m_statusCode = p_statusCode;
    this.m_status = `${p_statusCode}`.startsWith("4") ? "fail" : "error";
    this.m_isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
