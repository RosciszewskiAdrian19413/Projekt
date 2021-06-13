# -*- coding: utf-8 -*-
"""
Created on Tue Jun  4 22:02:57 2019

@author: SAJGO
"""

import sqlite3

if __name__ == "__main__":

    conn = sqlite3.connect('database.db')
    print("BD otwarta")
    
    conn.execute('CREATE TABLE pracownicy (imienazwisko TEXT, nrpracownika TEXT, adres TEXT)')
    print("Tabela utworzona")
    
    conn.close()
    print("BD zamknieta")
    
    
    conn = sqlite3.connect('database.db')
    print("BD otwarta")
    cur = conn.cursor()
    
    cur.execute("INSERT INTO pracownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",('Adrian Kowalski','1','Tczew') )
    cur.execute("INSERT INTO pracownicy (imienazwisko, nrpracownika, adres) VALUES (?,?,?)",('Agata Luda','2','Gdańsk') )
    conn.commit()
    
    cur.execute('SELECT * FROM pracownicy ORDER BY nrpracownika')
    print(cur.fetchall())
    
    conn.close()
    print("BD zamknieta")