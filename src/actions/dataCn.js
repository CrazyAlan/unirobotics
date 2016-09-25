export const header = {
	logo: '/assets/img/logo.png',
	tabs: [
		{name: '主页', link: '/'},
		{name: '课程系列', link: '/courses'},
		{name: '联系我们', link: '/contacts'}
	],
	socials: [
		{link: '/contacts', name: '微信'}
	]
};

export const promotions = [
                    {'course': '乐高', 'level': '初级','id': 0, 'img': '/assets/img/home/lego_cropped.png', 'duration': '8个月', 'description': '世界上最大的玩具制造商乐高集团（Lego）出品的头脑风暴（Mindstorm）机器人平台，寓教于乐，培养孩子动手能力和实践能力。'},
                    {'course': 'Arduino', 'level': '中级' ,'id': 1, 'img': '/assets/img/home/arduino_cropped.png', '时长': '8个月', 'description': '世界上最流行的开源硬件平台Arduino，学员能通过本课程学习基础电路，机械和计算机编程相关的全方位知识。'},
                    {'course': '树莓派', 'level': '高级' ,'id': 2, 'img': '/assets/img/home/RPi_cropped.png', '时长': '8个月', 'description': '世界上最小的掌上电脑树莓派(Raspberry Pi)源自英国，学员能通过本课程学习Linux 环境高级编程和复杂的机器人控制。'}
                   ];

export const courses = [

	                  {
	                  	title: '从这里启程',
                  		description: '乐高',
	                  	id: 0,
	                  	abstract: '世界上最大的玩具制造商乐高集团（Lego）出品的头脑风暴（Mindstorm）机器人平台，寓教于乐，培养孩子动手能力和实践能力。',

	                  	courses: [
	                               {'course': '单元1：基本移动与传感器', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level1.jpg', 'price': 'Price $300', 'description': '这个单元会带领学生入门乐高头脑风暴机器人平台，学生会学习到基础的模块和传感器的使用。此单元不需要学生有任何相关基础知识。', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'},
	                               {'course': '单元2: 更多传感器与逻辑语言', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level2.png', 'price': 'Price $350', 'description': '学生在学习此单元之前需理解基本动作的控制和传感器的使用。在此单元中，学生会学习更多传感器的使用以及基本的编程。', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'}, 
                               {'course': '单元3: 基本控制理论', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level3.jpg', 'price': 'Price $400', 'description': '学生在学习此单元之前需理解大部分传感器的使用和控制。在此单元中，学生会学习简单的控制理论。', 'duration': 1.5,  courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'}, 
                                   {'course': '单元4: 实践项目', 'level': 'Lego', 'id': 0, 'img': '/assets/img/lego/level4.png', 'price': 'Price $450', 'description': '在此单元中，学生会运用他们在之前的所有单元所学到的知识，在老师的帮助下完成结业课程项目', 'duration': 1.5, courseDate: 'Course Schedule: SAT 14:00pm', startDate: 'Start from: Oct.1'}, 
                                   ]}, 
                        { 
                            title: '更上一层楼', description: 'ARDUINO', 
                            id:1, 
                            abstract:'世界上最流行的开源硬件平台Arduino，学员能通过本课程学习基础电路，机械和计算机编程相关的全方位知识。',     
                            courses: [
                                   {'course': '单元1: IDE编程入门与基础传感器', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level1.jpg', 'price': 350, 'description': '在此单元中，学生会学习Arduino平台基础和IDE编程，学生也会学习到基础传感器的使用。', 'duration': 2, courseDate: 'Course schedule: SAT 14:00pm', startDate: 'Start Date Oct.1'}, 
                                   {'course': '单元2: 机械臂与控制理论', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level2.jpg', 'price': 400, 'description': '在学习本单元之前，学生需掌握Arduino编程基础，本单元会带领学生学习伺服电机和更多传感器的使用，以及机械臂的设计与控制。', 'duration': 2, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'}, 
                                   {'course': '单元3: 移动机器人平台', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level3.jpg', 'price': 450, 'description': '在学习本单元之前，学生需已掌握Arduio编程进阶知识以及大量传感器的使用，学生会在此单元中学习如何制作一个移动机器人平台并给它编程。', 'duration': 2, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'}, 
                                   {'course': '单元4: 实践项目', 'level': 'Arduino', 'id': 0, 'img': '/assets/img/arduino/level4.jpg', 'price': 500, 'description': '在此单元中，学生会运用他们在之前所有单元所学到的知识，在老师的帮助下完成结业课程项目。', 'duration': 2}, 
                                   ]}, 
                    { 
                        title: '挑战你自己',
	                    description: '树莓派',
	                  	id:2,
	                  	abstract: '世界上最小的掌上电脑树莓派(Raspberry Pi)源自英国，学员能通过本课程学习Linux 环境高级编程和复杂的机器人控制。',
	                  	courses: [
	                               {'course': '单元1', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': '马上回来', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': '单元2', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': '马上回来', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': '单元3', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': '马上回来', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                               {'course': '单元4', 'level': 'Raspberry Pi', 'id': 0, 'img': '/assets/img-temp/course1.jpg', 'price': 150, 'description': '马上回来', 'duration': 6, courseDate: 'SAT 14:00pm', startDate: 'Oct.1'},
	                  ]}
	            ];

export const teachers = {
  title: '师资力量',
  h1: '我们的团队',
  description: '来自加拿大顶尖大学毕业的工程师和教育专家',
  teachers: [
    {teacher: '陈老师', id: 0, img: '/assets/img/home/teacher_alan.jpg', socials: [{link: '#', type: 'facebook'}], position: 'CEO, 计算机硕士', introduction: '西蒙飞沙大学计算机硕士毕业, 拥有超过十年的计算机程序编写经验。'},
    {teacher: '张老师', id: 1, img: '/assets/img/home/Teacher_Martin.png', socials: [{link: '#', type: 'facebook'}], position: 'CTO, 机器人学家', introduction: '西蒙飞沙大学计算机硕士，商科硕士毕业，西蒙飞沙Autonomy实验室机器人研究员。'},
    {teacher: '蒂姆老师', id: 2, img: '/assets/img/home/Teacher_Tim.jpg', socials: [{link: '#', type: 'facebook'}], position: '教员，创客', introduction: '英属哥伦比亚大学机械工程学硕士毕业，机械制造师，创客。'},
    {teacher: '丛老师', id: 3, img: '/assets/img/home/Teacher_Zicun.jpg', socials: [{link: '#', type: 'facebook'}], position: '教员，教育专家', introduction: '维多利亚大学教育学硕士, 青少年教育专家，多年教育行业咨询师从业经验。'},
  ]
};

export const about = {
	title: '关于我们',
	h1: '我们的使命',
	description: '21世纪会是机器人技术大爆发的世纪，为了让您的孩子赢在起跑线上，我们为您的孩子准备了全方位各层次机器人相关课程。我们是来自英属哥伦比亚大学（UBC）和西蒙飞沙大学（SFU）的UniRobotics机器人教育团队，团队成员均有硕士以上计算机，电子和机械相关学位。',
	videoLink: 'https://www.youtube.com/embed/8fsbEctnwnw',
	videoCaption: '关于乐高机器人教育',
	img: '/assets/img/home/aboutus.jpg'
};

export const ourNumbers = {
	title: '跟我们一起成长',
	h1: '我们的数据',
	description: '聚合各类优势资源，我们是一支飞速成长的团队！',
	advantages: [
		{counter: 3, h4: '课程系列', details: '我们有3大主要课程系列：乐高头脑风暴机器人，Arduino，树莓派，全方位一体化课程适合从初级到高级各个层次学员'},
		{counter: 8, h4: '师资力量', details: '我们有8名来自加拿大顶尖大学的机器人学相关专业全职教师，保证教学质量。'},
		{counter: 5, h4: '精品小班', details: '精品小班精英化教学，每班同时只容纳3到5名学生。'},
		{counter: 57, h4: '教学单元', details: '我们有多达57个教学单元来满足多远化教学需求。'}
	]
};

export const gallery = {
	title: '图库',
	description: '我们的作品',
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




