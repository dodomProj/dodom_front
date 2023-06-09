export interface TestInfo {
  key: string;
  title: string;
  text: string[];
  img: string;
  time: number;
}

export const psychologicalTest: TestInfo[] = [
  {
    key: 'depression',
    title: '우울증 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 우울증 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '/assets/depression.png',
    time: 5,
  },
  {
    key: 'anxiety',
    title: '불안증 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 불안증 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '/assets/anxiety.png',
    time: 5,
  },
  {
    key: 'stress',
    title: '스트레스 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 스트레스 정도를 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '/assets/stress.png',
    time: 5,
  },
  {
    key: 'stress-management',
    title: '스트레스 대처 방식 검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인의 스트레스 대처 방식을 판단할 수 있으며,  이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다.',
      '하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '/assets/stress_management.png',
    time: 5,
  },
  {
    key: 'communication-parent-child',
    title: '부모-자녀의사소통검사',
    text: [
      '마음을 편안하게 안정시킨 후 문항에 대한 자신의 생각과 상태를 있는 그대로 나타내시면 됩니다. 이 검사를 통해 본인이 부모님과의 대화 시 어떠한 의사소통 유형을 사용하고 있는지 파악할 수 있습니다. 원활한 의사소통은 서로에게 긍정적인 영향을 주고 서로를 이해하는 데 큰 도움이 됩니다.',
      '이 검사는 자신을 이해하는 데에 유익한 도움을 줄 수 있습니다. 하지만 이 검사 결과의 의미를 지나치게 확대 해석하여 대입하면 안됩니다.',
    ],
    img: '/assets/communication_closed.png',
    time: 5,
  },
];

export interface TestQNAInfo {
  key: string;
  questions: string[];
  answers: {
    img: string;
    text: string;
    score: number;
  }[];
}

export const psychologicalQNA: TestQNAInfo[] = [
  {
    key: 'depression',
    questions: [
      '1. 요즘 나는 슬프거나 우울하다고 느낀다.',
      '2. 다른 사람이 보기에 내가 자주 기운이 없어 보인다고 말한다.',
      '3. 일상적인 활동들에 대해 별로 흥미나 즐거움을 느끼지 못한다.',
      '4. 다이어트를 하지 않았음에도 불구하고 최근에 체중이 갑자기 5kg이나 줄었다.',
      '5. 거의 매일 식욕의 감소나 증가를 느낀다.',
      '6. 밥맛이 없을때가 많다.',
      '7. 요즘 들어 음식을 너무 많이 먹게 된다.',
      '8. 요즘 잠을 잘 못 이루거나 아침에 일어나기가 어렵다.',
      '9. 자주 초조하다고 느낀다.',
      '10. 쉽게 피로를 느끼며 기운이 없다.',
      '11. 쓸모없는 인간이라는 생각이 자주 든다.',
      '12. 요즘 집중하기가 힘들다.',
      '13. 종종 죽음이나 자살에 대해 생각을 한다.',
    ],
    answers: [
      {
        img: '/assets/emoji_slightly_smiling_face.png',
        text: '전혀 없음.',
        score: 0,
      },
      {
        img: '/assets/emoji_face_with_raised_eyebrow.png',
        text: '약간.',
        score: 0,
      },
      {
        img: '/assets/emoji_confused_face.png',
        text: '상당히.',
        score: 1,
      },
      {
        img: '/assets/emoji_face_with_spiral_eyes.png',
        text: '아주 심함.',
        score: 1,
      },
    ],
  },
  {
    key: 'anxiety',
    questions: [
      '1. 나는 매사에 자신이 없다.',
      '2. 나는 타인의 시선을 많이 의식한다.',
      '3. 마음이 불안하고 안정이 안된다.',
      '4. 갑자기 불행한 일이 닥칠 것 같은 기분이 든다.',
      '5. 친구들과 같이 있으면 어색하고 마음이 불편하다.',
      '6. 가만히 있지를 못하고 안절부절하다.',
      '7. 자주 반복되는 생각 때문에 피곤하다.',
      '8. 중요한 일이 생기면 소변부터 마렵다.',
      '9. 처음보는 사람 앞에서는 긴장이 심하다.',
      '10. 정신집중을 하기가 힘들다.',
      '11. 권위있는 사람들을 대할 때 두려운 생각이 든다.',
      '12. 혼자 있을 때에도 불안하고 두려운 생각이 든다.',
      '13. 사람들 앞에 설 때 떨린다.',
      '14. 불치병에 걸릴까봐 걱정된다.',
    ],
    answers: [
      {
        img: '/assets/emoji_slightly_smiling_face.png',
        text: '전혀 없음.',
        score: 0,
      },
      {
        img: '/assets/emoji_face_with_raised_eyebrow.png',
        text: '약간.',
        score: 0,
      },
      {
        img: '/assets/emoji_confused_face.png',
        text: '상당히.',
        score: 1,
      },
      {
        img: '/assets/emoji_face_with_spiral_eyes.png',
        text: '아주 심함.',
        score: 1,
      },
    ],
  },
  {
    key: 'stress',
    questions: [
      '1. 아침에 일어나는게 두렵다.',
      '2. 잠을 자기 어렵거나 자주 잠에서 깬다.',
      '3. 늘 쫒기는 기분이다.',
      '4. 식욕이 없거나 갑자기 폭식을 한다.',
      '5. 모든 일에 집중이 안되고 일을 잘하지 못한다.',
      '6. 기억력이 나빠서 잘 까먹는다.',
      '7. 모든 일이 하기 싫고 자주 피곤하다.',
      '8. 나에 대한 안 좋은 소문에 힘든 적이 있다.',
      '9. 말과 행동이 난폭해졌다.',
      '10. 갑자기 화가 날 때가 있다.',
      '11. 남들과 편하게 얘기하기가 꺼려진다.',
      '12. 가족으로부터 가정에 소홀하다는 이야기를 들었다.',
      '13. 내가 하는 일이 지루하게 느껴진다.',
      '14. 직장 동료가 마음대로 행동한 적이 있다.',
      '15. 이해할 수 없는 요구 때문에 머리가 아프다.',
      '16. 도망가고 싶다.',
      '17. 나에게 시간약속은 압박감이 드는 것이다.',
      '18. 반응이 과도하다는 말을 많이 듣는다.',
      '19. 생각이 많아 해야 할 일들이 늦어진다.',
      '20. 쉽게 부끄러워하고 다른 사람의 반응에 민감하다.',
      '21. 동료와 사소한 말다툼을 한 적이 있다.',
      '22. 내 의지와는 상관없는 일을 한 적 있다.',
      '23. 다른 사람이 나의 의견을 무시하곤 한다.',
      '24. 직장을 그만두고 싶은 적이 있다.',
      '25. 아무런 이유없이 나를 못 살게 구는 사람이 있다.',
      '26. 많은 사람들 앞에서 혼난 적이 있다.',
      '27. 나에게만 유독 많은 일이 주어진다고 생각한다.',
    ],
    answers: [
      {
        img: '/assets/emoji_relieved_face.png',
        text: '전혀 없었다.',
        score: 0,
      },
      {
        img: '/assets/emoji_thinking_face.png',
        text: '가끔 있었다.',
        score: 1,
      },
      {
        img: '/assets/emoji_face_with_raised_eyebrow.png',
        text: '자주 있었다.',
        score: 2,
      },
    ],
  },
  {
    key: 'stress-management',
    questions: [
      '1. 내가 무엇을 해야 하는지 계획을 세우고 그것에 따른다.',
      '2. 무엇을 해야 할지를 알기 때문에 일이 잘 되도록 더 열심히 노력한다.',
      '3. 일이 잘 풀렸으면 좋겠다는 소망을 가진다.',
      '4. 내가 지금 처한 상황보다 더 좋은 경우를 상상한다.',
      '5. 문제 해결에 도움을 줄 수 있는 사람과 이야기를 나눈다.',
      '6. 주변 사람들에게 조언을 구한다.',
      '7. 모든 것을 잊어버리려고 노력한다.',
      '8. 그 일을 무시해버리거나 심각하게 받아들이지 않으려고 노력한다.',
      '9. 그 일에서 무엇인가 긍정적인 부분을 찾아본다.',
      '10. 일이 잘 해결 될 수 있도록 무엇인가를 변화시킨다.',
      '11. 운이 나쁠 때도 있으니까 운으로 돌린다.',
      '12. 아무 일도 안 일어난 것처럼 행동한다.',
      '13. 그 일이 사라지거나 끝나버리기를 바란다.',
      '14. 일어난 일이나 나의 기분이 바뀔 수 있기를 바란다.',
      '15. 내가 느끼고 있는 바를 누군가에게 말한다.',
      '16. 그 일에 대해 좀 더 알아보려고 누군가와 이야기한다.',
      '17. 그 문제를 더 잘 이해하기 위하여 그것을 자세히 분석해 본다.',
      '18. 다음 단계에는 어떻게 해야 할 것인지에 대하여 생각한다.',
      '19. 그 일을 잊기 위하여 다른 일을 하거나 다른 활동을 한다.',
      '20. 다른 사람에게 분풀이를 한다.',
      '21. 그 일이 지금보다 더 나쁠 수도 있었다고 믿어본다.',
      '22. 그 일이 잘 되게 해달라고 기도를 한다.',
      '23. 전문적인 도움을 요청한다.',
      '24. 다른 사람들의 위로와 이해를 받아들인다.',
    ],
    answers: [
      {
        img: '/assets/emoji_slightly_frowning_face.png',
        text: '전혀 그렇지 않다.',
        score: 1,
      },
      {
        img: '/assets/emoji_neutral_face.png',
        text: '그렇지 않다.',
        score: 2,
      },
      {
        img: '/assets/emoji_slightly_smiling_face.png',
        text: '그렇다.',
        score: 3,
      },
      {
        img: '/assets/emoji_grinning_face.png',
        text: '매우 그렇다.',
        score: 4,
      },
    ],
  },
  {
    key: 'communication-parent-child',
    questions: [
      '1. 나는 부모님에게 나의 생각을 망설임없이 의논한다.',
      '2. 나는 부모님과 많은 이야기를 하지 않는다.',
      '3. 부모님은 항상 나의 말을 주의 깊게 들어주신다.',
      '4. 나는 부모님의 부탁을 듣는게 힘들다.',
      '5. 부모님은 나에게 내가 몰라도 되는 것들을 말씀하셔서 괴롭다.',
      '6. 부모님은 항상 나의 기분 상태를 잘 알아차려 주신다.',
      '7. 나는 부모님과의 대화방식에 만족하는 편이다.',
      '8. 나는 문제가 생겼을 때 내 부모님과 의논한다.',
      '9. 나는 부모님에게 애정 표현을 잘하는 편이다.',
      '10. 나는 문제가 생겼을 때 부모님에게 이야기하지 않는 편이다.',
      '11. 나는 부모님과 이야기를 나눌 때 조심스럽다.',
      '12. 내 부모님은 내가 어떤 생각이나 감정을 가지고 있는지 잘 모른다.',
      '13. 부모님은 내 질문에 정직하게 대답해주신다.',
      '14. 부모님은 내 입장을 이해하려고 노력하신다.',
      '15. 나는 부모님과 대화하기 꺼려지는 주제가 있다.',
      '16. 나는 부모님과 많은 대화를 한다.',
      '17. 나는 부모님에게 감정표현을 잘 한다.',
      '18. 부모님은 나에게 잔소리만 하신다.',
      '19. 부모님은 나에게 가끔 심하게 화를 내신다.',
      '20. 나는 부모님에게 나의 솔직한 감정을 털어놓지 않는다.',
    ],
    answers: [
      {
        img: '/assets/emoji_face_with_raised_eyebrow.png',
        text: '전혀 그렇지 않다.',
        score: 1,
      },
      {
        img: '/assets/emoji_neutral_face.png',
        text: '그렇지 않다.',
        score: 2,
      },
      {
        img: '/assets/emoji_astonished_face.png',
        text: '그렇다.',
        score: 3,
      },
      {
        img: '/assets/emoji_face_with_monocle.png',
        text: '매우 그렇다.',
        score: 4,
      },
    ],
  },
];

export interface TestResultInfo {
  key: string;
  common: {
    text: string[];
    total: number;
  };
  result: {
    score: number | number[];
    title: string;
    subTitle: string;
    img?: string;
  }[];
}

export const psychologicalResult: TestResultInfo[] = [
  {
    key: 'depression',
    common: {
      text: [
        "우리는 누구나 기분의 변화를 경험하며 살아갑니다. 어떤 날에는 소망하는 일들이 잘 이루어져서 기 분이 좋고 즐거우며 신바람이 납니다. 자신이 유능한 사람이라는 생각이 들며 자신감과 의욕이 충만해 지고 인생은 정말 살 만한 것이라고 여겨지면서 '기분이 들뜨는'때가 있습니다. 하지만 때로는 실패와 좌절을 겪어 기분이 침체되고 우울해질 때도 있습니다. 자신이 무가치한 사람이라는 생각이 들며 자신 감과 의욕을 잃고 앞으로의 미래에 대해 희망이 없다고 여겨지면서 '기분이 가라앉는'때가 있을 겁니 다. 삶을 살아가면서 누구나 이러한 기분의 변화를 경험하게 됩니다. 또한 이러한 기분의 변화가 그다 지 심하지 않아서 일상생활을 하는데 큰 지장을 받지 않는 경우가 대부분입니다. 하지만 기분이 가라앉 는 정도가 지나쳐서 매우 고통스러울 뿐만 아니라 일상생활을 하는데 어려움을 겪게 된다면 우울장애 (depressive disorder)를 의심해봐야 합니다.",
        "우울증은 삶을 매우 고통스럽게 만드는 정신장애인 동시에 '심리적 독감'이라고 불릴 정도로 매우 흔 한 장애이기도 합니다. 또한 우울증은 개인의 능력과 의욕을 저하시켜 현실적 적응을 어렵게 만드는 주 요한 요인으로 알려져 있습니다. 우울장애는 기간에 따라 다양하게 나뉠 수 있습니다. 최소 2주 이상 우 울한 기분이거나 흥미나 즐거움의 상실이 지속되었다면 병원에서 상담 받으시는 것을 추천해드립니다.",
        '우울증을 예방하기 위해서는 입증된 방법은 없으나 스트레스 조절, 주변에서의 사회적 지지가 있습 니다. 스트레스가 생겼을 때 건강한 방식으로 스트레스를 조절하여 긍정적인 정서로의 변화가 중요할 것입니다. 또한 우울하거나 힘든 날에는 주변 사람들에게 이야기하고 위로를 받는 것 역시 도움이 됩니다.',
      ],
      total: 13,
    },
    result: [
      {
        score: 3,
        title: '우울하지 않음',
        subTitle:
          '당신은 우울하지 않고 밝게 지내고 있습니다. 대인관계에서도 어려움없이 지낼 수 있을 것이며 편안한 심리상태를 가지고 있을 수 있습니다. 또한 스트레스 상황에 처하더라도 기인하게 대응하여 문제를 해결해 나갈 수 있을 것으로 보여집니다.',
      },
      {
        score: 7,
        title: '약간 우울',
        subTitle:
          '당신은 약간 우울하게 느끼면서 지내고 있습니다. 그러나, 스트레스 상황에 처하면 기분이 가라앉으면서 쉽게 이겨내기 어려울 수 있습니다.',
      },
      {
        score: 13,
        title: '우울 정도 심함',
        subTitle:
          '당신은 현재 우울한 기분을 느끼며 생활하고 있습니다. 좀더 정밀한 심리검사를 받아보신 후 심리상담 전문가와의 상담이 필요할 수 있습니다.',
      },
    ],
  },
  {
    key: 'anxiety',
    common: {
      text: [
        '불안은 누구나 생활속에서 흔히 경험하는 불쾌한 감정 중 하나입니다. 예를 들면, 여러 사람 앞에서 발표를 해야 하거나 중요한 시험을 앞두고 있을 때, 뱀이나 지네와 같은 위험한 동물을 만나거나 아주 높은 곳에 올랐을 때 등 부정적인 결과가 나타날 수도 있고 위험하고 위협적인 상황에 처했을 때 자연 스러운 정서적 반응이 불안입니다.',
        ' 불안을 느끼면 우리는 부정적인 결과가 일어나지 않도록 긴장을 하고 경계를 하며 조심스런 행동을 하 게 됩니다. 그래서 위협적인 상황을 벗어나게 되고 안도감을 느끼며 긴장을 풀고 편안한 상태로 돌아가 게 됩니다. 이처럼 위험한 상황에서 적절한 불안을 느끼는 것은 매우 자연스럽고 정상적인 것입니다. 즉, 불안은 불쾌하게 느껴지지만 우리에게 도움이 되는 감정으로 위험하거나 위협적인 상황에서 우리 자신을 보호하기 위해 경계태세를 취하게 하는 자연스럽고 적응적인 심리적 반응이며 정상적인 불안 (normal anxiety)이라 할 수 있습니다.',
        '하지만, 현실적인 위험이 없는 상황이나 대상에 대해서 불안을 느끼는 경우, 현실적인 위험의 정도에 비해 과도하게 심한 불안을 느끼는 경우, 불안을 느끼게 하는 위협적인 요인이 사라졌음에도 불구하고 불안이 과도하게 지속되는 경우에는 병적인 불안(pathological anxiety)이라고 할 수 있습니다. 이처 럼 병적인 불안으로 인하여 과도한 심리적 고통을 느끼거나 현실적인 적응에 심각한 어려움을 겪는 경 우를 불안장애(anxiety disorder)라고 합니다. 불안장애는 병적인 불안이 나타나는 양상이나 불안을 느끼는 대상 및 상황에 따라서 여러 가지 하위유형으로 구분 될 수 있습니다.',
        "불안한 마음이 드신다면 '지금 나를 보호하기 위해 경계태세를 취하는구나'라고 생각해 보시고 불안 을 다룰 수 있는 다양한 활동을 해보세요. 혹시 불안한 마음이 오랜 시간 동안(최소 6개월 이상) 지속되 신다면 병원에 방문해 상담을 받아보시는 것을 추천합니다.",
      ],
      total: 14,
    },
    result: [
      {
        score: 5,
        title: '정서 안정',
        subTitle:
          '당신은 정서가 안정되어 있습니다. 자신이 하고자 하는 일에 있어서 편안함을 느끼며 자신감있게 할 수 있습니다.',
      },
      {
        score: 9,
        title: '약간 불안',
        subTitle:
          '당신은 정서가 다소 불안정 할 수 있습니다. 자신이 하고자 하는 일에 있어서 스트레스 상황에 하거나 어려운 일이 있으면 불안정해 질 수 있습니다.',
      },
      {
        score: 14,
        title: '불안 정도 심함',
        subTitle:
          '당신은 정서가 매우 불안정한 상태입니다. 만일 지속적으로 이러한 문제가 있을 시에는 정밀심리검사 후 심리상담전문가와의 상담이 필요합니다.',
      },
    ],
  },
  {
    key: 'stress',
    common: {
      text: [
        '스트레스 유발 요인으로는 재앙적 사건(태풍, 지진 등), 주요 생활사건(이혼, 배우자의 사망), 그리고 일 상의 골칫거리(교통체증, 대인관계)로 나뉠 수 있습니다. 스트레스를 받게 되면 직접적으로는 면역계, 신경계와 내분비계에 영향을 미쳐 여러 질병들을 일으킬 수 있으며, 간접적으로는 음주, 흡연, 수면 문 제 등으로 질병의 위험을 증가시키기도 합니다.',
        '스트레스는 우리 삶의 모든 영역에 존재합니다.',
        '그렇기 때문에 스트레스 사건을 경험 하더라도 스트레스에 대한 생각을 바꾼다면 잘 이겨낼 수 있을 것 입니다. 따라서, 스트레스 자체보다 스트레스를 어떻게 대처하느냐가 우리 삶에 있어 중요한 요소로 작 용할 것입니다.',
        '스트레스란?',
        '인간이 심리적 혹은 신체적으로 감당하기 어려운 상황에 처했을 때 느끼는 불안과 위협의 감정입니다. (Lazarus, 1993)',
      ],
      total: 54,
    },
    result: [
      {
        score: 15,
        title: '정서적 불편 없음',
        img: '/assets/stress_none',
        subTitle: '현재 특별한 정서적 불편을 느끼지 않는 상태입니다.',
      },
      {
        score: 30,
        title: '약간의 스트레스 상태',
        img: '/assets/stress_little',
        subTitle: '약간의 스트레스가 의심되며 예방책이 필요합니다.',
      },
      {
        score: 42,
        title: '중등도의 스트레스 상태',
        img: '/assets/stress_moderate',
        subTitle: '중등도의 스트레스가 있으며 적극적인 도움을 받아야 합니다.',
      },
      {
        score: 54,
        title: '고도의 스트레스 상태',
        img: '/assets/stress_severe',
        subTitle: '고도의 스트레스로 인해 반드시 전문적인 치료를 요합니다.',
      },
    ],
  },
  {
    key: 'stress-management',
    common: {
      text: [
        '문제 중심적 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하여 문제가 되는 행동 자체를 변화하거나 환경적인 조건을 변화시켜 스트레스를 유발한 근원에 대처하려는 노력을 말합니다.',
        '사회적지지 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하기 위하여 주변 사람들이나 문제를 해결할 수 있는 사람들과 이야기를 주고받으면서 문제를 해결하려는 것을 말합니다.',
        '정서 중심적 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하기 보다는 스트레스로부터 초래된 자신의 정서상태를 통제하려는 노력으로 스트레스 상황에서의 정서적 고통을 감소하려는 것을 말합니다.',
        '소망 추구적 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하기 보다는 그러한 문제나 상황이 긍정적으로 해결되기를 바라는 것을 바라는 소극적인 대처 방식을 말합니다.',
        '스트레스 대처방식은 좋고/나쁨, 옳고/그름이 없습니다. 각자의 스트레스 유형에 맞는 대처방식을 취하는 것이 좋습니다. 예를 들어, 스트레스 원인이 해결 가능한 것이라면 문제 중심적 대처나 사회적지지 대처가 유용한 방법일 것입니다. 반면에 스트레스 원인이 해결 불가능한 것이라면 해결하려고 힘을 들이며 더 스트레스를 받는 것보다 정서 중심적 대처나 소망 추구적 대처를 취하는 것이 유용할 것입니다.',
      ],
      total: 24,
    },
    result: [
      {
        score: [1, 2, 9, 10, 17, 18],
        title: '문제 중심적 대처형',
        subTitle:
          '당신은 스트레스를 받았을 때 문제 중심적 대처를 사용합니다. 문제 중심적 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하여 문제가 되는 행동을 변화하거나 환경적인 조건을 변화시켜 스트레스의 근원에 대처하려는 노력을 말합니다. ',
      },
      {
        score: [5, 6, 15, 16, 23, 24],
        title: '사회적 지지 대처형',
        subTitle:
          '당신은 스트레스를 받았을 때 사회적 지지 대처를 사용합니다. 사회적 지지 대처란 적극적인 대처 방식으로 스트레스가 유발되는 문제나 상황에 직접적으로 대응하고 해결하기 위해 주변 사람들이나 문제를 해결할 수 있는 사람들과 이야기를 나눠 문제를 해결하려고 하는 것을 말합니다. ',
      },
      {
        score: [7, 8, 11, 12, 19, 20],
        title: '정서 중심적 대처형',
        subTitle:
          '당신은 스트레스를 받았을 때 정서 중심적 대처를 사용합니다. 정서 중심적 대처란 스트레스가 유발되는 문제나 상황을 직접적으로 통제하기보다는 스트레스로부터 초래되는 개인의 정서상태를 통제하려는 노력으로 회피, 부정, 감정적 대응과 같은 방식을 사용하여 스트레스 상황에서의 정서적 고통을 감소하려는 방식입니다. ',
      },
      {
        score: [3, 4, 13, 14, 21, 22],
        title: '소망 추구적 대처형',
        subTitle:
          '당신은 스트레스를 받았을 때 소망 추구적 대처를 사용합니다. 소망 추구적 대처란 소극적인 대처 방식으로 스트레스가 유발되는 문제나 상황을 직접적으로 통제하기보다는 그러한 문제나 상황이 긍정적으로 해결되기를 바라는 것을 말합니다.',
      },
      {
        score: [],
        title: '문제 중심적 대처형',
        subTitle:
          '당신은 스트레스를 받았을 때 문제 중심적 대처를 사용합니다. 문제 중심적 대처란 스트레스가 유발되는 문제나 상황에 직접적으로 대응하여 문제가 되는 행동을 변화하거나 환경적인 조건을 변화시켜 스트레스와 근원에 대처하려는 노력을 말합니다.',
      },
    ],
  },
  {
    key: 'communication-parent-child',
    common: {
      text: [],
      total: 80,
    },
    result: [
      {
        score: [1, 3, 6, 7, 8, 9, 13, 14, 16, 17],
        title: '개방형 의사소통 방식',
        img: '/assets/communication_open.png',
        subTitle:
          '부모님과 개방적인 의사소통을 하고 있습니다. 개방적인 의사소통은 정확하고 모순되지 않은 메시지를 보내고, 부모님과의 상호작용에서 억압받지 않고 자유롭게 감정을 표현하는 의사소통입니다. 앞으로도 지금처럼 부모님과 대화를 한다면 부모님과의 관계는 더욱 좋아질 것입니다.',
      },
      {
        score: [2, 4, 5, 10, 11, 12, 15, 18, 19, 20],
        title: '폐쇄형 의사소통 방식',
        img: '/assets/communication_closed.png',
        subTitle:
          '부모님과 폐쇄적인 의사소통을 하고 있습니다. 폐쇄적인 의사소통은 일치되지 않고 모순된 메시지를 보내고 부정적인 발언을 하며, 의사소통을 할 때 비난적인 표현을 쓰는 등 역기능적인 의사소통을 말합니다. 부모님과의 신뢰와 애정을 쌓기 위해서는 부모님과 자유롭게 감정을 표현하는 등 의사소통 방식에 변화를 주어야 합니다. ',
      },
      {
        score: [],
        title: '개방폐쇄형 의사소통 방식',
        img: '/assets/communication_neutral.png',
        subTitle:
          '부모님과 개방적, 폐쇄적 의사소통을 사용하고 있습니다. 어떤 때에는 부모님과의 상호작용에서 자유롭게 의사소통을 하지만, 또 어떤 날에는 비난적인 표현이나 부정적인 발언을 하기도 합니다. 일관적이지 않은 의사소통은 부모님과 본인에게 혼란을 일으킬 수 있어 의사소통을 피할 수도 있습니다. 일관적이고 자유로운 의사소통을 하신다면 부모님과의 신뢰와 애정을 쌓으실 수 있을 것입니다.',
      },
    ],
  },
];
