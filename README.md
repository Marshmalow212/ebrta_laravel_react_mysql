# E-BRTC - Web Project

This is a prototype for vehicle and license registration system of BRTA. Here we have demonstrated how we can make the portion of this civil service hassle free and faster. 
***
### `Tools & Technologies`
> [VS Code](https://code.visualstudio.com/)
> 
> [Laravel 8](https://laravel.com/)
> 
> [php 8.x.x](https://www.php.net/)
> 
> [ReactJs](https://reactjs.org/)
> 
> [Bootstrap v4](https://getbootstrap.com/)
> 
> [Reactstrap](https://reactstrap.github.io/)
> 
> [Axios](https://github.com/axios/axios)
> 
> [Fontawsome](https://fontawesome.com/v5.15/icons?d=gallery&p=2)
> 
***
> ###  For this project to run, you must have installed nodejs with npm , php 8.x.x with composer.
>> Make sure all of this included into the environment path so that you don't have to worry  
>> intalling them locally 


***
### `Instructions`
> 1. Clone the repository 

	git clone https://github.com/Marshmalow212/ebrtc_laravel_react_mysql.git

> 2. build dependencies and  libraries using composer and npm

	composer install && npm install

**`Copy .env.example file and rename it .env`**

> 3. Create database in mysql

	Database Name : ebrta

**`**Note: if you have SQlite installed`**

> 4. Run migrations

	php artisan migrate:fresh

> 5. Generate App Key

	php artisan key:generate

> 6. Link storage

	php artisan storage:link

> 7. Run php server

	php artisan serve

> 8. Run react app server

	npm run watch

****
**`Note: You have to run php server and npm server at the same time`**

***

#### `Instructions related to SQlite`

**Sorry! Please google it for now, I will include soon if I get the perfect procedure**


	
