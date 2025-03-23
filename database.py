import os
import mysql.connector as database
import config

connection = database.connect(
    user=config.USER,
    password=config.PWD,
    host=config.HOST,
    database=config.DB)

cursor = connection.cursor()

def save_score(user, score):
    try:
        statement = "INSERT INTO high_score (name, score) VALUES (%s, %s)"
        data = (user, score)
        cursor.execute(statement, data)
        connection.commit()
        print("Successfully added entry to database")
    except database.Error as e:
        print(f"Error adding entry to database: {e}")

def get_top_ten():
    mycursor = connection.cursor()

    mycursor.execute("SELECT * FROM high_score ORDER BY score DESC LIMIT 10")

    myresult = mycursor.fetchall()

    return myresult

#connection.close()