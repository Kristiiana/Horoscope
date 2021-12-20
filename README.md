# Horoscope Website

Authors: Kristiana Gerxhi, Neha Kamireddi

CS375-finalProject (Summer 2020) 

How to reach Horoscope Website:

Part 1
Download Nodejs
cd into the project file, then run "npm install" and "npm install axios" in terminal.
cd into project file/src and run "node server.js" in a separate terminal window
in the project file in another terminal window, run "npm start" and the local host in a browser should pop up.
Update env.json with your postgres password. (After creating the Database as shown in Step 2)


Part 2 
Download postgreSQL for windows. Find instructions here: https://www.postgresqltutorial.com/install-postgresql/
Open sql shell (psql)

Create the database:
psql --username postgres
CREATE DATABASE horoscope;

Log out of psql. Run the following command to log back in, substituting the name of your database:
psql --username postgres --dbname horoscope

Run the following queries:

CREATE TABLE signs (
    sign_name VARCHAR(15) PRIMARY KEY,
    start_date CHAR(6),
    end_date CHAR(6),
    planet VARCHAR(10),
    jobs VARCHAR(50),
    birthstone VARCHAR(10),
    compatible VARCHAR(50),
    non_compatible VARCHAR(50),
    element VARCHAR(5),
    quality VARCHAR(10),
    color VARCHAR(10),
    lucky_day VARCHAR(10),
    lucky_numbers VARCHAR(8),
    strengths VARCHAR(50),
    weakness VARCHAR(50),
    likes VARCHAR(20),
    dislikes VARCHAR(20)     
   );

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('aries', '03-Mar', '19-Apr', 'Mars',	'Professor, Defense Attorney', 'Diamond', 'Aquarius, Sagittarius', 'Taurus', 'Fire', 'Cardinal', 'Red', 'Tuesday', '1,8,17', 'Courageous, enthusiastic', 'Impatient', 'Physical challenges', 'Delays');

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('taurus', '20-Apr', '20-May', 'Venus', 'Manager, Photographer', 'Emerald', 'Virgo, Pisces', 'Sagittarius', 'Earth', 'Fixed', 'Green', 'Friday', '2,6,9', 'Reliable, patient', 'Stubborn', 'Gardening', 'Complications'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('gemini', '21-May', '20-Jun', 'Mercury', 'Journalist, Consultant', 'Pearl', 'Aquarius, Libra', 'Capricorn', 'Air', 'Mutable', 'Yellow', 'Wednesday', '5,7,14', 'Gentle, curious', 'Inconsistent', 'Music', 'Being alone');

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('cancer', '21-Jun', '22-Jul', 'Moon', 'Writer, Interior designer', 'Ruby', 'Scorpio, Pisces', 'Aquarius', 'Water', 'Cardinal', 'White', 'Monday', '2,3,15', 'Tenacious, loyal', 'Pessimistic', 'Art', 'Strangers');

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('leo', '23-Jul', '22-Aug', 'Sun', 'Actor, Teacher', 'Onyx', 'Libra, Gemini', 'Scorpio', 'Fire', 'Fixed', 'Gold', 'Sunday', '1,3,10', 'Creative, passionate', 'Arrogant', 'Holidays', 'Being ignored'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('virgo', '23-Aug', '22-Sep', 'Mercury', 'Accountant, Veterinarian', 'Sapphire', 'Taurus, Capricorn', 'Sagittarius', 'Earth', 'Mutable', 'Grey', 'Wednesday', '5,14,15',	'Analytical, kind', 'Shyness', 	'Animals', 'Rudeness'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('libra',	'23-Sep', '22-Oct', 'Venus', 'Lawyer, Fashion designer', 'Opal', 'Leo, Sagittarius', 'Virgo', 'Air', 'Cardinal', 'Pink', 'Friday', '4,6,13', 'Cooperative, gracious', 'Indecisive', 'Harmony', 'Violence'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('scorpio', '23-Oct',	'21-Nov', 'Pluto', 'Bodyworker, Musician', 'Topaz', 'Scorpio, Pisces', 'Aries', 'Water', 'Fixed', 'Scarlet', 'Tuesday', '8,11,18', 'Resourceful, brave', 'Distrusting', 'Truth', 'Dishonesty'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('sagittarius','22-Nov', '21-Dec', 'Jupiter', 'Designer, Salesperson', 'Turquoise', 'Aries, Libra', 'Capricorn', 'Fire', 'Mutable', 'Blue', 'Thursday', '3,7,9', 'Generous, idealistic', 'Impatient', 'Freedom', 'Clingy people');

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('capricorn', '22-Dec', '19-Jan', 'Saturn', 'Police officer, Doctor', 'Garnet', 'Virgo, Taurus', 'Virgo', 'Earth', 'Cardinal', 'Brown', 'Saturday', '4,8,13', 'Responsible, disciplined', 'Know -it-all',	'Family', 'Lies');

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('aquarius', '20-Jan', '18-Feb', 'Uranus', 'Coach, Researcher', 'Amethyst', 'Gemini, Libra', 'Taurus', 'Air', 'Fixed', 'Silver', 'Saturday', '4,7,11', 'Progressive, original', 'Temperamental', 'Helping others', 'Limitations'); 

INSERT INTO signs (sign_name, start_date, end_date, planet, jobs, birthstone, compatible, non_compatible, element, quality, color, lucky_day, lucky_numbers, strengths, weakness, likes, dislikes) VALUES ('pisces', '19-Feb', '20-Mar', 'Neptune', 'Psychiatrist, Nurse', 'Turquoise', 'Scorpio, Cancer', 'Cancer', 'Water', 'Mutable', 'Purple', 'Thursday', '3,9,12', 'Compassionate, artistic', 'Fearful', 'Being alone', 'Know-it-all');

examples:

SELECT * FROM signs; (shows all signs)

SELECT * FROM signs WHERE sign_name = 'Libra'; (shows a specific sign)

DELETE FROM signs WHERE sign_name = 'Libra'; (deletes Libra's row)





References:

Database:
1. https://www.astrology-zodiac-signs.com/
2. https://www.thespruce.com/your-zodiac-birthstones-chart-by-month-1274603
3. https://astrostyle.com/love/
4. https://www.google.com/amp/s/www.vix.com/en/relationships/528355/these-zodiac-signs-are-not-compatible-and-you-probably-never-knew-it%3famp
5. https://www.bustle.com/life/the-most-compatible-astrological-signs-34576
6. https://www.allure.com/story/zodiac-sign-personality-traits-dates4

Images:
https://www.freepik.com/vectors/watercolor pictures (signs characteristics and daily/weekly/monthly horoscope buttons)
https://www.lifestartswithcoffee.com/what-i-love-about-each-zodiac-sign/  (background image)
