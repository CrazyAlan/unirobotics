export const header = {
	logo: '/assets/img/logo.png',
	tabs: [
		{name: 'Home', link: '/'},
		{name: 'Courses', link: '/courses'},
		{name: 'Contacts', link: '/contacts'}
	],
	socials: [
		{link: '/contacts', name: 'weixin'}
	]
};

export const promotions = [
                    {'course': 'Lego', 'level': 'beginner','id': 0, 'img': '/assets/img/home/lego_cropped.png', 'duration': '6 months', 'description': 'Entry level robotics course with adorable LEGO Mindstorm robotics education platform'},
                    {'course': 'Arduino', 'level': 'intermediate' ,'id': 1, 'img': '/assets/img/home/arduino_cropped.png', 'duration': '6 months', 'description': 'Intermediate level robotics course with the most popular open-source hardware platform, Arduino.'},
                    {'course': 'Raspberry Pi', 'level': 'advanced' ,'id': 2, 'img': '/assets/img/home/RPi_cropped.png', 'duration': '6 months', 'description': 'Advanced level robotics course with powerful linux computer Raspberry Pi.'}
                   ];

export const courses = [

	                  {
	                  	title: 'START FROM HERE',
                  		description: '乐高',
	                  	id: 0,
	                  	abstract: 'Entry level robotics course with adorable LEGO Mindstorm robotics education platform',

	                  	courses: [
	                               {'course': 'Lego 1: Basic movement and sensors', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level1.jpg', 'price': 'Price $300', 'description': 'This section includes an introduction to the Lego Mindstorm. The students will learn about basic modules and sensors. It is for students with no background on Lego Mindstorm.', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'},
	                               {'course': 'Lego 2: More sensors and logic decisions', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level2.png', 'price': 'Price $350', 'description': 'This section is for students who understand basic movement and sensor use. The students will learn about more sensor and simple logic programming in this section.', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'},
	                               {'course': 'Lego 3: Control theory', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level3.jpg', 'price': 'Price $400', 'description': 'This section is for students already understanding basic movement and control. The students will learn about simple control theory in this section.', 'duration': 1.5,  courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'},
	                               {'course': 'Lego 4: Grand project', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level4.png', 'price': 'Price $450', 'description': 'In this section, the students will build their own grand project with the help from the teachers.', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'},
	                  ]},

	                  {
	                  	title: 'LERAN SOMETHING NEW',
                  		description: 'ARDUINO',
	                  	id:1,
	                  	abstract: 'Intermediate level robotics course with the most popular open-source hardware platform, Arduino.',
	                  	courses: [
	                               {'course': 'Arduino 1: Introduction and basic sensors', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level1.jpg', 'price': 350, 'description': 'In this section, the Arduino hardware platform and software IDE are introduced. Students will also learn about usage of basic sensors.', 'duration': 2, courseDate: 'Course schedule: SAT 14:00pm', startDate: 'Start Date Oct.1'},
	                               {'course': 'Arduino 2: Robot arm and control', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level2.jpg', 'price': 400, 'description': 'This section is for students who understand Arduino and programming with IDE. Students will learn about servo motor and robot arm design in this section.', 'duration': 2, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': 'Arduino 3: Mobile platform', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level3.jpg', 'price': 450, 'description': 'This section if for students who has a good understanding of motor control and sensors usage with Arduino. In this section, students will learn how to build a mobile platform and program for it', 'duration': 2, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': 'Arduino 4: Grand project', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level4.jpg', 'price': 500, 'description': 'In this section, the students will build their own grand project with the help from the teachers', 'duration': 2},
	                  ]},

	                  {
	                  	title: 'Challenge yourself',
                  		description: 'Raspberry Pi',
	                  	id:2,
	                  	abstract: 'Use the most popular open-source Linux computer to build your powerful project',
	                  	courses: [
	                               {'course': 'Raspberry Pi 1', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': 'Coming soon', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': 'Raspberry Pi 2', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': 'Coming soon', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': 'Raspberry Pi 3', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': 'Coming soon', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': 'Raspberry Pi 4', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': 'Coming soon', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                  ]}
	            ];

export const teachers = {
  title: 'Our team',
  h1: 'MEET THE PROFESSIONALS',
  description: 'Engineers and tutors with diverse background from top universities in Canada',
  teachers: [
    {teacher: 'Alan Chen', id: 0, img: '/assets/img/home/teacher_alan.jpg', socials: [{link: '#', type: 'facebook'}], position: 'CEO, Computing Scientist', introduction: 'Computing Science Msc. of Simon Fraser University, programmer with more than 10 years experience'},
    {teacher: 'Martin Zhang', id: 1, img: '/assets/img/home/Teacher_Martin.png', socials: [{link: '#', type: 'facebook'}], position: 'CTO, Roboticist', introduction: 'Computing Science Msc. of Simon Fraser University, robotics researcher in Autonomy lab, SFU MBA, artist'},
    {teacher: 'Tim Blackwater', id: 2, img: '/assets/img/home/Teacher_Tim.jpg', socials: [{link: '#', type: 'facebook'}], position: 'Tutor, Maker', introduction: 'Mechanical Engineering Meng. of University of British Columbia, designer, maker'},
    {teacher: 'Zicun Cong', id: 3, img: '/assets/img/home/Teacher_Zicun.jpg', socials: [{link: '#', type: 'facebook'}], position: 'Tutor, Educator', introduction: 'Education M.A. of Victoria University, teenager educator, counsultant'},
  ]
};

export const about = {
	title: 'About us',
	h1: 'WHAT DO WE DO',
	description: 'We are a team of ambitious robotics professionals working on teenager robotics education in Vancouver, Canada. Our robotics courses are based on the latest, most popular platforms ranging from LEGO, Arduino to Raspberry Pi.',
	videoLink: 'https://www.youtube.com/embed/8fsbEctnwnw',
	videoCaption: 'About LEGO Education',
	img: '/assets/img/home/aboutus.jpg'
};

export const ourNumbers = {
	title: 'Our Numbers',
	h1: 'We work hard',
	description: 'We are growing fast with our hard-working team members and diverse resources.',
	advantages: [
		{counter: 3, h4: 'Course series', details: 'We have 3 main course series including Lego, Arduino and Raspberry Pi.'},
		{counter: 8, h4: 'Professional teachers', details: 'We have 8 professional teachers with strong robotics background from top uinversities in Canada.'},
		{counter: 68, h4: 'Happy students', details: '68 students in total were enrolled in our courses in last semester. All of them achieved great improvement on ther robotics skills.'},
		{counter: 57, h4: 'Courses units', details: 'We have 57 course units for students in different levels.'}
	]
};

export const gallery = {
	title: 'Gallery',
	description: 'Our works',
	pics: [
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'},
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'},
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'},
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'},
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'},
		{img: '/assets/img-temp/gallery1.jpg', data_title: 'custom title 1', title: 'Courses for kids', description: 'Nam ullamcorper mauris ex, ut efficitur est convallis nec'}
	]
};

export const offers = {
	title: 'Our Offers',
	description: 'the best offers',
	courses: [
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'},
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'},
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'},
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'},
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'},
		{price: 750, unit: 'per course', course: 'For photographers', button: 'Order Now', description: 'Fusce dolor libero, efficitur et lobortis at, faucibus nec nunc. Proin fermentum turpis eget. Praesent malesuada facilisis maximus. Integer blandit velit nec purus convallis.'}
	]
};

export const partners = {
	title: 'Our Partners',
	h1: 'Who trusts us',
	description: 'Etiam dolor tortor, egestas a libero eget, sollicitudin maximus nulla. Nunc vitae maximus ipsum. Vestibulum sodales nisi massa, vitae blandit massa luctus id.',
	pics: [
		{img: '/assets/img-temp/partners/img01.png', link: '#'},
		{img: '/assets/img-temp/partners/img02.png', link: '#'},
		{img: '/assets/img-temp/partners/img03.png', link: '#'},
		{img: '/assets/img-temp/partners/img04.png', link: '#'},
		{img: '/assets/img-temp/partners/img05.png', link: '#'},
		{img: '/assets/img-temp/partners/img06.png', link: '#'},
		{img: '/assets/img-temp/partners/img07.png', link: '#'},
		{img: '/assets/img-temp/partners/img08.png', link: '#'},
		{img: '/assets/img-temp/partners/img09.png', link: '#'},
		{img: '/assets/img-temp/partners/img10.png', link: '#'},
		{img: '/assets/img-temp/partners/img11.png', link: '#'},
		{img: '/assets/img-temp/partners/img12.png', link: '#'}
	]
};

export const contact = {
	tab1: 'Write us',
	tab2: 'Contacts'

};

export const footer = {
	logo: '/assets/img/logo-foot.png',
	description: 'We are a team of ambitious robotics professionals working on teenager robotics education in Vancouver, Canada. Our robotics courses are based on the latest, most popular platforms ranging from LEGO, Arduino to Raspberry Pi.',
	socials: [
		{link: '/contacts', type: 'weixin'},
		{link: '/contacts', type: 'facebook'}
	],

	h2: 'Latest Posts',
	latest_posts: [
		{img: '/assets/img-temp/post-footer1.jpg', date: 'April 27, 2015', link: '#', title: 'Mauris tellus magna, pretium a feugiat'},
		{img: '/assets/img-temp/post-footer1.jpg', date: 'April 27, 2015', link: '#', title: 'Mauris tellus magna, pretium a feugiat'}		
	],
	pics_title: 'Some photos',
	pics: [
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery1.jpg', title: 'Image 1'},
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery2.jpg', title: 'Image 2'},
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery3.jpg', title: 'Image 3'},
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery4.jpg', title: 'Image 4'},
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery5.jpg', title: 'Image 5'},
		{thumbnails: '/assets/img-temp/gallery1.jpg', img: '/assets/img-temp/footer__gallery6.jpg', title: 'Image 6'},
	]
};




