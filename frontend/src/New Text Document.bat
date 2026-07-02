@echo off
echo Membuat plain text struktur folder...

:: Perintah /F untuk menyertakan file, /A untuk menggunakan karakter teks biasa (agar rapi di Notepad)
tree /F /A > struktur.txt

echo Selesai! File struktur.txt telah dibuat.
pause