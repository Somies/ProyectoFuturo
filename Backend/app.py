from flask import Flask, request, jsonify
import pyodbc
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Conexión a la base de datos SQL Server
def get_db_connection():
    connection = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};'
        'SERVER=localhost;'  # Cambia localhost si es necesario
        'DATABASE=Registarse;'  # Tu base de datos
        'Trusted_Connection=yes;'
    )
    return connection

# Ruta para registrar un nuevo usuario
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO Users (username, password) VALUES (?, ?)", (username, password))
    conn.commit()
    conn.close()
    
    return jsonify({"message": "Usuario registrado exitosamente!"}), 200

# Ruta para hacer login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Users WHERE username = ? AND password = ?", (username, password))
    user = cursor.fetchone()
    conn.close()
    
    if user:
        return jsonify({"message": "Login exitoso!"}), 200
    else:
        return jsonify({"message": "Usuario o contraseña incorrectos."}), 401

if __name__ == "__main__":
    app.run(debug=True)
