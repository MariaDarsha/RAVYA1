const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');
const Opportunity = require('./models/Opportunity');

dotenv.config();

const courses = [
  {
    title: 'Entrepreneurship Fundamentals',
    instructor: 'Dr. Sarah Mitchell',
    duration: '4h 30m',
    lessons: 12,
    rating: 4.9,
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    difficulty: 'Beginner'
  },
  {
    title: 'Business Plan Development',
    instructor: 'Mark Jansen',
    duration: '5h 15m',
    lessons: 15,
    rating: 4.8,
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1454165833767-027fffdce641',
    difficulty: 'Intermediate'
  },
  {
    title: 'Digital Marketing Mastery',
    instructor: 'Elena Rodriguez',
    duration: '6h 45m',
    lessons: 20,
    rating: 4.7,
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    difficulty: 'Beginner'
  }
];

const opportunities = [
  {
    title: 'Global Youth Startup Awards',
    description: 'A prestigious competition for young entrepreneurs under 30.',
    type: 'competition',
    organization: 'International Startup Hub',
    deadline: new Date('2026-06-01'),
    link: 'https://example.com/awards',
    benefits: ['10k USD Prize', 'Mentorship Package']
  },
  {
    title: 'Women in Tech Grant',
    description: 'Grant specifically designed for female-led technology startups.',
    type: 'grant',
    organization: 'Innovate Women Foundation',
    deadline: new Date('2026-05-15'),
    link: 'https://example.com/grant',
    benefits: ['50k USD Funding', 'Technical Support']
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Courses seeded');

    await Opportunity.deleteMany({});
    await Opportunity.insertMany(opportunities);
    console.log('Opportunities seeded');

    mongoose.connection.close();
    console.log('Seeding complete');
  } catch (err) {
    console.error('Seeding error:', err);
  }
};

seedDB();
