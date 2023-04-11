import jwt from "jsonwebtoken"
import expressJwt from 'express-jwt'

const jwtSecret = 'my_secret_key';

// Función para generar un nuevo token JWT
function generateToken(payload: any) {
  const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
  return token;
}