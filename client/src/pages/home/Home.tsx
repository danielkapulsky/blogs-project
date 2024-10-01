import React from 'react'
import { IBlogEntity } from '../../interfaces/blogInterface';
import BlogItem from './components/BlogItem';
import { Stack } from '@mui/material';

const blogData: IBlogEntity[] = [
  {
    _id: '1',
    title: 'The Rise of AI',
    subtitle: 'Understanding Artificial Intelligence',
    text: 'Artificial intelligence (AI) is a rapidly growing field that aims to create machines capable of intelligent behavior.',
    img: 'https://images.unsplash.com/photo-1626366657705-84fb039744f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuc3BhbHNofGVufDB8fDB8fHww',
    catagory: 'Technology',
    userId: 'user1',
    likes: ['user2', 'user3', 'user4'],
    createdAt: new Date('2024-01-01T10:00:00'),
    updatedAt: new Date('2024-01-05T12:00:00')
  },
  {
    _id: '2',
    title: 'Healthy Eating 101',
    subtitle: 'A Guide to Better Nutrition',
    text: 'Eating healthy is essential for maintaining good health and wellbeing. This guide will walk you through the basics of balanced nutrition.',
    img: 'https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BhbHNofGVufDB8fDB8fHww',
    catagory: 'Health',
    userId: 'user2',
    likes: ['user1', 'user3'],
    createdAt: new Date('2024-02-10T08:30:00'),
    updatedAt: new Date('2024-02-12T09:45:00')
  },
  {
    _id: '3',
    title: 'Exploring the Great Outdoors',
    subtitle: 'The Benefits of Outdoor Activities',
    text: 'Engaging in outdoor activities can have a tremendous impact on both physical and mental health. Let\'s explore the benefits.',
    img: 'https://images.unsplash.com/photo-1688600793944-4d45993e6583?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D',
    catagory: 'Lifestyle',
    userId: 'user3',
    likes: ['user2', 'user4'],
    createdAt: new Date('2024-03-15T14:20:00'),
    updatedAt: new Date('2024-03-20T16:35:00')
  },
  {
    _id: '4',
    title: 'The Future of Renewable Energy',
    subtitle: 'Harnessing Wind and Solar Power',
    text: 'Renewable energy sources like wind and solar power are essential for reducing our reliance on fossil fuels and combating climate change.',
    img: 'https://images.unsplash.com/photo-1639020715373-8641d5adfdc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D',
    catagory: 'Environment',
    userId: 'user4',
    likes: ['user1', 'user3'],
    createdAt: new Date('2024-04-22T11:00:00'),
    updatedAt: new Date('2024-04-24T13:10:00')
  },
  {
    _id: '5',
    title: 'Mastering the Art of Coding',
    subtitle: 'How to Become a Better Developer',
    text: 'Coding is more than just writing lines of code. It involves problem-solving, creativity, and constant learning.',
    img: 'https://images.unsplash.com/photo-1622375734599-925cb5328554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D',
    catagory: 'Technology',
    userId: 'user5',
    likes: ['user3', 'user4', 'user2'],
    createdAt: new Date('2024-05-05T10:50:00'),
    updatedAt: new Date('2024-05-07T15:30:00')
  }
];

const Home = () => {
  return (
    <div>
      <Stack spacing={5}>
        {blogData.map((blog) => (
          <BlogItem />
        ))}
      </Stack>
    </div>
  )
}

export default Home