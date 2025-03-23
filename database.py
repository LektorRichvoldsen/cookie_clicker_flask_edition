import os
import mysql.connector as database
import config

connection = database.connect(
    user=config.USER,
    password=config.PWD,
    host=config.HOST,
    database=config.DB)

cursor = connection.cursor()

def add_data(first_name, last_name):
    try:
        statement = "INSERT INTO employees (first_name,last_name) VALUES (%s, %s)"
        data = (first_name, last_name)
        cursor.execute(statement, data)
        cursor.commit()
        print("Successfully added entry to database")
    except database.Error as e:
        print(f"Error adding entry to database: {e}")

def get_top_ten():
    mycursor = connection.cursor()

    mycursor.execute("SELECT * FROM high_score ORDER BY score DESC LIMIT 10")

    myresult = mycursor.fetchall()

    return myresult

#connection.close()