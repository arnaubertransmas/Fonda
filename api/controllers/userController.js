import { getUser } from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const validateUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ 
        error: "Username i password són obligatoris" 
      });
    }

    const user = await getUser(email, password);
    
    if (!user) {
      return res.status(401).json({ 
        error: "Credencials incorrectes" 
      });
    }

    const token = jwt.sign(
      { 
        userId: user._id || user.id, 
        email: user.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' } 
    );

    res.json({ 
      success: true, 
      token,
      user 
    });
    
  } catch (error) {
    console.error("Error validant usuari:", error);
    res.status(500).json({ error: "Failed to validate user" });
  }
};

export { validateUser };