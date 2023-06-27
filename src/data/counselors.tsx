export interface CounselorProps {
  name: string;
  icon: string;
  career: number;
  score: number;
  introduce: string;
  counselorId: number;
  img: string;
}

export interface TagsProps {
  tagId: number;
  name: string;
  title: string;
  text: string;
  counselors: CounselorProps[];
}

export const counselorTags: TagsProps[] = [
  {
    tagId: 1,
    name: 'depression',
    title: '우울증 전문 상담사',
    text: `우울증 상담을 전문으로 하는 상담사입니다.\n상담사를 클릭하면, 더 자세히 알아볼 수 있어요.`,
    counselors: [
      {
        name: '김도돔',
        icon: '/assets/avatar_0.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 0,
        img: '/assets/half_avatar_0.png',
      },
      {
        name: '양도돔',
        icon: '/assets/avatar_1.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 1,
        img: '/assets/half_avatar_1.png',
      },
      {
        name: '박도돔',
        icon: '/assets/avatar_2.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 2,
        img: '/assets/half_avatar_2.png',
      },
      {
        name: '정도돔',
        icon: '/assets/avatar_3.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 3,
        img: '/assets/half_avatar_3.png',
      },
      {
        name: '한도돔',
        icon: '/assets/avatar_4.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 4,
        img: '/assets/half_avatar_4.png',
      },
      {
        name: '서도돔',
        icon: '/assets/avatar_5.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 5,
        img: '/assets/half_avatar_5.png',
      },
    ],
  },
  {
    tagId: 2,
    name: 'health',
    title: '건강 상담사',
    text: `건강한 몸과 마음을 위해 이야기를 나누는 상담사입니다.\n상담사를 클릭하면, 더 자세히 알아볼 수 있어요.`,
    counselors: [
      {
        name: '유도돔',
        icon: '/assets/avatar_6.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 6,
        img: '/assets/half_avatar_6.png',
      },
      {
        name: '이도돔',
        icon: '/assets/avatar_7.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 7,
        img: '/assets/half_avatar_7.png',
      },
      {
        name: '방도돔',
        icon: '/assets/avatar_8.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 8,
        img: '/assets/half_avatar_8.png',
      },
      {
        name: '강도돔',
        icon: '/assets/avatar_9.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 9,
        img: '/assets/half_avatar_9.png',
      },
      {
        name: '조도돔',
        icon: '/assets/avatar_10.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 10,
        img: '/assets/half_avatar_10.png',
      },
      {
        name: '차도돔',
        icon: '/assets/avatar_11.png',
        career: 6,
        score: 4.7,
        introduce: '같이 얘기하고, 같이 웃어요.',
        counselorId: 11,
        img: '/assets/half_avatar_11.png',
      },
    ],
  },
];
