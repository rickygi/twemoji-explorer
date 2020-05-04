const twemojis = [
  { id: 1, code: '1f600', title: 'grinning face' },
  { id: 2, code: '1f603', title: 'grinning face with big eyes' },
  { id: 3, code: '1f604', title: 'grinning face with smiling eyes' },
  { id: 4, code: '1f601', title: 'beaming face with smiling eyes' },
  { id: 5, code: '1f606', title: 'grinning squinting face' },
  { id: 6, code: '1f605', title: 'grinning face with sweat' },
  { id: 7, code: '1f923', title: 'rolling on the floor laughing' },
  { id: 8, code: '1f602', title: 'face with tears of joy' },
  { id: 9, code: '1f642', title: 'slightly smiling face' },
  { id: 10, code: '1f643', title: 'upside-down face' },
  { id: 11, code: '1f609', title: 'winking face' },
  { id: 12, code: '1f60a', title: 'smiling face with smiling eyes' },
  { id: 13, code: '1f607', title: 'smiling face with halo' },
  { id: 14, code: '1f970', title: 'smiling face with hearts' },
  { id: 15, code: '1f60d', title: 'smiling face with heart-eyes' },
  { id: 16, code: '1f929', title: 'star-struck' },
  { id: 17, code: '1f618', title: 'face blowing a kiss' },
  { id: 18, code: '1f617', title: 'kissing face' },
  { id: 19, code: '263a', title: 'smiling face' },
  { id: 20, code: '1f61a', title: 'kissing face with closed eyes' },
  { id: 21, code: '1f619', title: 'kissing face with smiling eyes' },
  { id: 22, code: '1f60b', title: 'face savoring food' },
  { id: 23, code: '1f61b', title: 'face with tongue' },
  { id: 24, code: '1f61c', title: 'winking face with tongue' },
  { id: 25, code: '1f92a', title: 'zany face' },
  { id: 26, code: '1f61d', title: 'squinting face with tongue' },
  { id: 27, code: '1f911', title: 'money-mouth face' },
  { id: 28, code: '1f917', title: 'hugging face' },
  { id: 29, code: '1f92d', title: 'face with hand over mouth' },
  { id: 30, code: '1f92b', title: 'shushing face' },
  { id: 31, code: '1f914', title: 'thinking face' },
  { id: 32, code: '1f910', title: 'zipper-mouth face' },
  { id: 33, code: '1f928', title: 'face with raised eyebrow' },
  { id: 34, code: '1f610', title: 'neutral face' },
  { id: 35, code: '1f611', title: 'expressionless face' },
  { id: 36, code: '1f636', title: 'face without mouth' },
  { id: 37, code: '1f60f', title: 'smirking face' },
  { id: 38, code: '1f612', title: 'unamused face' },
  { id: 39, code: '1f644', title: 'face with rolling eyes' },
  { id: 40, code: '1f62c', title: 'grimacing face' },
  { id: 41, code: '1f925', title: 'lying face' },
  { id: 42, code: '1f60c', title: 'relieved face' },
  { id: 43, code: '1f614', title: 'pensive face' },
  { id: 44, code: '1f62a', title: 'sleepy face' },
  { id: 45, code: '1f924', title: 'drooling face' },
  { id: 46, code: '1f634', title: 'sleeping face' },
  { id: 47, code: '1f637', title: 'face with medical mask' },
  { id: 48, code: '1f912', title: 'face with thermometer' },
  { id: 49, code: '1f915', title: 'face with head-bandage' },
  { id: 50, code: '1f922', title: 'nauseated face' },
  { id: 51, code: '1f92e', title: 'face vomiting' },
  { id: 52, code: '1f927', title: 'sneezing face' },
  { id: 53, code: '1f975', title: 'hot face' },
  { id: 54, code: '1f976', title: 'cold face' },
  { id: 55, code: '1f974', title: 'woozy face' },
  { id: 56, code: '1f635', title: 'dizzy face' },
  { id: 57, code: '1f92f', title: 'exploding head' },
  { id: 58, code: '1f920', title: 'cowboy hat face' },
  { id: 59, code: '1f973', title: 'partying face' },
  { id: 60, code: '1f60e', title: 'smiling face with sunglasses' },
  { id: 61, code: '1f913', title: 'nerd face' },
  { id: 62, code: '1f9d0', title: 'face with monocle' },
  { id: 63, code: '1f615', title: 'confused face' },
  { id: 64, code: '1f61f', title: 'worried face' },
  { id: 65, code: '1f641', title: 'slightly frowning face' },
  { id: 66, code: '2639', title: 'frowning face' },
  { id: 67, code: '1f62e', title: 'face with open mouth' },
  { id: 68, code: '1f62f', title: 'hushed face' },
  { id: 69, code: '1f632', title: 'astonished face' },
  { id: 70, code: '1f633', title: 'flushed face' },
  { id: 71, code: '1f97a', title: 'pleading face' },
  { id: 72, code: '1f626', title: 'frowning face with open mouth' },
  { id: 73, code: '1f627', title: 'anguished face' },
  { id: 74, code: '1f628', title: 'fearful face' },
  { id: 75, code: '1f630', title: 'anxious face with sweat' },
  { id: 76, code: '1f625', title: 'sad but relieved face' },
  { id: 77, code: '1f622', title: 'crying face' },
  { id: 78, code: '1f62d', title: 'loudly crying face' },
  { id: 79, code: '1f631', title: 'face screaming in fear' },
  { id: 80, code: '1f616', title: 'confounded face' },
  { id: 81, code: '1f623', title: 'persevering face' },
  { id: 82, code: '1f61e', title: 'disappointed face' },
  { id: 83, code: '1f613', title: 'downcast face with sweat' },
  { id: 84, code: '1f629', title: 'weary face' },
  { id: 85, code: '1f62b', title: 'tired face' },
  { id: 86, code: '1f971', title: 'yawning face' },
  { id: 87, code: '1f624', title: 'face with steam from nose' },
  { id: 88, code: '1f621', title: 'pouting face' },
  { id: 89, code: '1f620', title: 'angry face' },
  { id: 90, code: '1f92c', title: 'face with symbols on mouth' },
  { id: 91, code: '1f608', title: 'smiling face with horns' },
  { id: 92, code: '1f47f', title: 'angry face with horns' },
  { id: 93, code: '1f480', title: 'skull' },
  { id: 94, code: '2620', title: 'skull and crossbones' },
  { id: 95, code: '1f4a9', title: 'pile of poo' },
  { id: 96, code: '1f921', title: 'clown face' },
  { id: 97, code: '1f479', title: 'ogre' },
  { id: 98, code: '1f47a', title: 'goblin' },
  { id: 99, code: '1f47b', title: 'ghost' },
  { id: 100, code: '1f47d', title: 'alien' },
  { id: 101, code: '1f47e', title: 'alien monster' },
  { id: 102, code: '1f916', title: 'robot' },
  { id: 103, code: '1f63a', title: 'grinning cat' },
  { id: 104, code: '1f638', title: 'grinning cat with smiling eyes' },
  { id: 105, code: '1f639', title: 'cat with tears of joy' },
  { id: 106, code: '1f63b', title: 'smiling cat with heart-eyes' },
  { id: 107, code: '1f63c', title: 'cat with wry smile' },
  { id: 108, code: '1f63d', title: 'kissing cat' },
  { id: 109, code: '1f640', title: 'weary cat' },
  { id: 110, code: '1f63f', title: 'crying cat' },
  { id: 111, code: '1f63e', title: 'pouting cat' },
  { id: 112, code: '1f648', title: 'see-no-evil monkey' },
  { id: 113, code: '1f649', title: 'hear-no-evil monkey' },
  { id: 114, code: '1f64a', title: 'speak-no-evil monkey' },
  { id: 115, code: '1f48b', title: 'kiss mark' },
  { id: 116, code: '1f48c', title: 'love letter' },
  { id: 117, code: '1f498', title: 'heart with arrow' },
  { id: 118, code: '1f49d', title: 'heart with ribbon' },
  { id: 119, code: '1f496', title: 'sparkling heart' },
  { id: 120, code: '1f497', title: 'growing heart' },
  { id: 121, code: '1f493', title: 'beating heart' },
  { id: 122, code: '1f49e', title: 'revolving hearts' },
  { id: 123, code: '1f495', title: 'two hearts' },
  { id: 124, code: '1f49f', title: 'heart decoration' },
  { id: 125, code: '2763', title: 'heart exclamation' },
  { id: 126, code: '1f494', title: 'broken heart' },
  { id: 127, code: '2764', title: 'red heart' },
  { id: 128, code: '1f9e1', title: 'orange heart' },
  { id: 129, code: '1f49b', title: 'yellow heart' },
  { id: 130, code: '1f49a', title: 'green heart' },
  { id: 131, code: '1f499', title: 'blue heart' },
  { id: 132, code: '1f49c', title: 'purple heart' },
  { id: 133, code: '1f90e', title: 'brown heart' },
  { id: 134, code: '1f5a4', title: 'black heart' },
  { id: 135, code: '1f90d', title: 'white heart' },
  { id: 136, code: '1f4af', title: 'hundred points' },
  { id: 137, code: '1f4a2', title: 'anger symbol' },
  { id: 138, code: '1f4a5', title: 'collision' },
  { id: 139, code: '1f4ab', title: 'dizzy' },
  { id: 140, code: '1f4a6', title: 'sweat droplets' },
  { id: 141, code: '1f4a8', title: 'dashing away' },
  { id: 142, code: '1f573', title: 'hole' },
  { id: 143, code: '1f4a3', title: 'bomb' },
  { id: 144, code: '1f4ac', title: 'speech balloon' },
  { id: 145, code: '1f441-200d-1f5e8', title: 'eye in speech bubble' },
  { id: 146, code: '1f5e8', title: 'left speech bubble' },
  { id: 147, code: '1f5ef', title: 'right anger bubble' },
  { id: 148, code: '1f4ad', title: 'thought balloon' },
  { id: 149, code: '1f4a4', title: 'zzz' },
  { id: 150, code: '1f44b', title: 'waving hand' },
  { id: 151, code: '1f44b-1f3fb', title: 'waving hand: light skin tone' },
  {
    id: 152,
    code: '1f44b-1f3fc',
    title: 'waving hand: medium-light skin tone'
  },
  { id: 153, code: '1f44b-1f3fd', title: 'waving hand: medium skin tone' },
  { id: 154, code: '1f44b-1f3fe', title: 'waving hand: medium-dark skin tone' },
  { id: 155, code: '1f44b-1f3ff', title: 'waving hand: dark skin tone' },
  { id: 156, code: '1f91a', title: 'raised back of hand' },
  {
    id: 157,
    code: '1f91a-1f3fb',
    title: 'raised back of hand: light skin tone'
  },
  {
    id: 158,
    code: '1f91a-1f3fc',
    title: 'raised back of hand: medium-light skin tone'
  },
  {
    id: 159,
    code: '1f91a-1f3fd',
    title: 'raised back of hand: medium skin tone'
  },
  {
    id: 160,
    code: '1f91a-1f3fe',
    title: 'raised back of hand: medium-dark skin tone'
  },
  {
    id: 161,
    code: '1f91a-1f3ff',
    title: 'raised back of hand: dark skin tone'
  },
  { id: 162, code: '1f590', title: 'hand with fingers splayed' },
  {
    id: 163,
    code: '1f590-1f3fb',
    title: 'hand with fingers splayed: light skin tone'
  },
  {
    id: 164,
    code: '1f590-1f3fc',
    title: 'hand with fingers splayed: medium-light skin tone'
  },
  {
    id: 165,
    code: '1f590-1f3fd',
    title: 'hand with fingers splayed: medium skin tone'
  },
  {
    id: 166,
    code: '1f590-1f3fe',
    title: 'hand with fingers splayed: medium-dark skin tone'
  },
  {
    id: 167,
    code: '1f590-1f3ff',
    title: 'hand with fingers splayed: dark skin tone'
  },
  { id: 168, code: '270b', title: 'raised hand' },
  { id: 169, code: '270b-1f3fb', title: 'raised hand: light skin tone' },
  { id: 170, code: '270b-1f3fc', title: 'raised hand: medium-light skin tone' },
  { id: 171, code: '270b-1f3fd', title: 'raised hand: medium skin tone' },
  { id: 172, code: '270b-1f3fe', title: 'raised hand: medium-dark skin tone' },
  { id: 173, code: '270b-1f3ff', title: 'raised hand: dark skin tone' },
  { id: 174, code: '1f596', title: 'vulcan salute' },
  { id: 175, code: '1f596-1f3fb', title: 'vulcan salute: light skin tone' },
  {
    id: 176,
    code: '1f596-1f3fc',
    title: 'vulcan salute: medium-light skin tone'
  },
  { id: 177, code: '1f596-1f3fd', title: 'vulcan salute: medium skin tone' },
  {
    id: 178,
    code: '1f596-1f3fe',
    title: 'vulcan salute: medium-dark skin tone'
  },
  { id: 179, code: '1f596-1f3ff', title: 'vulcan salute: dark skin tone' },
  { id: 180, code: '1f44c', title: 'ok hand' },
  { id: 181, code: '1f44c-1f3fb', title: 'ok hand: light skin tone' },
  { id: 182, code: '1f44c-1f3fc', title: 'ok hand: medium-light skin tone' },
  { id: 183, code: '1f44c-1f3fd', title: 'ok hand: medium skin tone' },
  { id: 184, code: '1f44c-1f3fe', title: 'ok hand: medium-dark skin tone' },
  { id: 185, code: '1f44c-1f3ff', title: 'ok hand: dark skin tone' },
  { id: 186, code: '1f90f', title: 'pinching hand' },
  { id: 187, code: '1f90f-1f3fb', title: 'pinching hand: light skin tone' },
  {
    id: 188,
    code: '1f90f-1f3fc',
    title: 'pinching hand: medium-light skin tone'
  },
  { id: 189, code: '1f90f-1f3fd', title: 'pinching hand: medium skin tone' },
  {
    id: 190,
    code: '1f90f-1f3fe',
    title: 'pinching hand: medium-dark skin tone'
  },
  { id: 191, code: '1f90f-1f3ff', title: 'pinching hand: dark skin tone' },
  { id: 192, code: '270c', title: 'victory hand' },
  { id: 193, code: '270c-1f3fb', title: 'victory hand: light skin tone' },
  {
    id: 194,
    code: '270c-1f3fc',
    title: 'victory hand: medium-light skin tone'
  },
  { id: 195, code: '270c-1f3fd', title: 'victory hand: medium skin tone' },
  { id: 196, code: '270c-1f3fe', title: 'victory hand: medium-dark skin tone' },
  { id: 197, code: '270c-1f3ff', title: 'victory hand: dark skin tone' },
  { id: 198, code: '1f91e', title: 'crossed fingers' },
  { id: 199, code: '1f91e-1f3fb', title: 'crossed fingers: light skin tone' },
  {
    id: 200,
    code: '1f91e-1f3fc',
    title: 'crossed fingers: medium-light skin tone'
  },
  { id: 201, code: '1f91e-1f3fd', title: 'crossed fingers: medium skin tone' },
  {
    id: 202,
    code: '1f91e-1f3fe',
    title: 'crossed fingers: medium-dark skin tone'
  },
  { id: 203, code: '1f91e-1f3ff', title: 'crossed fingers: dark skin tone' },
  { id: 204, code: '1f91f', title: 'love-you gesture' },
  { id: 205, code: '1f91f-1f3fb', title: 'love-you gesture: light skin tone' },
  {
    id: 206,
    code: '1f91f-1f3fc',
    title: 'love-you gesture: medium-light skin tone'
  },
  { id: 207, code: '1f91f-1f3fd', title: 'love-you gesture: medium skin tone' },
  {
    id: 208,
    code: '1f91f-1f3fe',
    title: 'love-you gesture: medium-dark skin tone'
  },
  { id: 209, code: '1f91f-1f3ff', title: 'love-you gesture: dark skin tone' },
  { id: 210, code: '1f918', title: 'sign of the horns' },
  { id: 211, code: '1f918-1f3fb', title: 'sign of the horns: light skin tone' },
  {
    id: 212,
    code: '1f918-1f3fc',
    title: 'sign of the horns: medium-light skin tone'
  },
  {
    id: 213,
    code: '1f918-1f3fd',
    title: 'sign of the horns: medium skin tone'
  },
  {
    id: 214,
    code: '1f918-1f3fe',
    title: 'sign of the horns: medium-dark skin tone'
  },
  { id: 215, code: '1f918-1f3ff', title: 'sign of the horns: dark skin tone' },
  { id: 216, code: '1f919', title: 'call me hand' },
  { id: 217, code: '1f919-1f3fb', title: 'call me hand: light skin tone' },
  {
    id: 218,
    code: '1f919-1f3fc',
    title: 'call me hand: medium-light skin tone'
  },
  { id: 219, code: '1f919-1f3fd', title: 'call me hand: medium skin tone' },
  {
    id: 220,
    code: '1f919-1f3fe',
    title: 'call me hand: medium-dark skin tone'
  },
  { id: 221, code: '1f919-1f3ff', title: 'call me hand: dark skin tone' },
  { id: 222, code: '1f448', title: 'backhand index pointing left' },
  {
    id: 223,
    code: '1f448-1f3fb',
    title: 'backhand index pointing left: light skin tone'
  },
  {
    id: 224,
    code: '1f448-1f3fc',
    title: 'backhand index pointing left: medium-light skin tone'
  },
  {
    id: 225,
    code: '1f448-1f3fd',
    title: 'backhand index pointing left: medium skin tone'
  },
  {
    id: 226,
    code: '1f448-1f3fe',
    title: 'backhand index pointing left: medium-dark skin tone'
  },
  {
    id: 227,
    code: '1f448-1f3ff',
    title: 'backhand index pointing left: dark skin tone'
  },
  { id: 228, code: '1f449', title: 'backhand index pointing right' },
  {
    id: 229,
    code: '1f449-1f3fb',
    title: 'backhand index pointing right: light skin tone'
  },
  {
    id: 230,
    code: '1f449-1f3fc',
    title: 'backhand index pointing right: medium-light skin tone'
  },
  {
    id: 231,
    code: '1f449-1f3fd',
    title: 'backhand index pointing right: medium skin tone'
  },
  {
    id: 232,
    code: '1f449-1f3fe',
    title: 'backhand index pointing right: medium-dark skin tone'
  },
  {
    id: 233,
    code: '1f449-1f3ff',
    title: 'backhand index pointing right: dark skin tone'
  },
  { id: 234, code: '1f446', title: 'backhand index pointing up' },
  {
    id: 235,
    code: '1f446-1f3fb',
    title: 'backhand index pointing up: light skin tone'
  },
  {
    id: 236,
    code: '1f446-1f3fc',
    title: 'backhand index pointing up: medium-light skin tone'
  },
  {
    id: 237,
    code: '1f446-1f3fd',
    title: 'backhand index pointing up: medium skin tone'
  },
  {
    id: 238,
    code: '1f446-1f3fe',
    title: 'backhand index pointing up: medium-dark skin tone'
  },
  {
    id: 239,
    code: '1f446-1f3ff',
    title: 'backhand index pointing up: dark skin tone'
  },
  { id: 240, code: '1f595', title: 'middle finger' },
  { id: 241, code: '1f595-1f3fb', title: 'middle finger: light skin tone' },
  {
    id: 242,
    code: '1f595-1f3fc',
    title: 'middle finger: medium-light skin tone'
  },
  { id: 243, code: '1f595-1f3fd', title: 'middle finger: medium skin tone' },
  {
    id: 244,
    code: '1f595-1f3fe',
    title: 'middle finger: medium-dark skin tone'
  },
  { id: 245, code: '1f595-1f3ff', title: 'middle finger: dark skin tone' },
  { id: 246, code: '1f447', title: 'backhand index pointing down' },
  {
    id: 247,
    code: '1f447-1f3fb',
    title: 'backhand index pointing down: light skin tone'
  },
  {
    id: 248,
    code: '1f447-1f3fc',
    title: 'backhand index pointing down: medium-light skin tone'
  },
  {
    id: 249,
    code: '1f447-1f3fd',
    title: 'backhand index pointing down: medium skin tone'
  },
  {
    id: 250,
    code: '1f447-1f3fe',
    title: 'backhand index pointing down: medium-dark skin tone'
  },
  {
    id: 251,
    code: '1f447-1f3ff',
    title: 'backhand index pointing down: dark skin tone'
  },
  { id: 252, code: '261d', title: 'index pointing up' },
  { id: 253, code: '261d-1f3fb', title: 'index pointing up: light skin tone' },
  {
    id: 254,
    code: '261d-1f3fc',
    title: 'index pointing up: medium-light skin tone'
  },
  { id: 255, code: '261d-1f3fd', title: 'index pointing up: medium skin tone' },
  {
    id: 256,
    code: '261d-1f3fe',
    title: 'index pointing up: medium-dark skin tone'
  },
  { id: 257, code: '261d-1f3ff', title: 'index pointing up: dark skin tone' },
  { id: 258, code: '1f44d', title: 'thumbs up' },
  { id: 259, code: '1f44d-1f3fb', title: 'thumbs up: light skin tone' },
  { id: 260, code: '1f44d-1f3fc', title: 'thumbs up: medium-light skin tone' },
  { id: 261, code: '1f44d-1f3fd', title: 'thumbs up: medium skin tone' },
  { id: 262, code: '1f44d-1f3fe', title: 'thumbs up: medium-dark skin tone' },
  { id: 263, code: '1f44d-1f3ff', title: 'thumbs up: dark skin tone' },
  { id: 264, code: '1f44e', title: 'thumbs down' },
  { id: 265, code: '1f44e-1f3fb', title: 'thumbs down: light skin tone' },
  {
    id: 266,
    code: '1f44e-1f3fc',
    title: 'thumbs down: medium-light skin tone'
  },
  { id: 267, code: '1f44e-1f3fd', title: 'thumbs down: medium skin tone' },
  { id: 268, code: '1f44e-1f3fe', title: 'thumbs down: medium-dark skin tone' },
  { id: 269, code: '1f44e-1f3ff', title: 'thumbs down: dark skin tone' },
  { id: 270, code: '270a', title: 'raised fist' },
  { id: 271, code: '270a-1f3fb', title: 'raised fist: light skin tone' },
  { id: 272, code: '270a-1f3fc', title: 'raised fist: medium-light skin tone' },
  { id: 273, code: '270a-1f3fd', title: 'raised fist: medium skin tone' },
  { id: 274, code: '270a-1f3fe', title: 'raised fist: medium-dark skin tone' },
  { id: 275, code: '270a-1f3ff', title: 'raised fist: dark skin tone' },
  { id: 276, code: '1f44a', title: 'oncoming fist' },
  { id: 277, code: '1f44a-1f3fb', title: 'oncoming fist: light skin tone' },
  {
    id: 278,
    code: '1f44a-1f3fc',
    title: 'oncoming fist: medium-light skin tone'
  },
  { id: 279, code: '1f44a-1f3fd', title: 'oncoming fist: medium skin tone' },
  {
    id: 280,
    code: '1f44a-1f3fe',
    title: 'oncoming fist: medium-dark skin tone'
  },
  { id: 281, code: '1f44a-1f3ff', title: 'oncoming fist: dark skin tone' },
  { id: 282, code: '1f91b', title: 'left-facing fist' },
  { id: 283, code: '1f91b-1f3fb', title: 'left-facing fist: light skin tone' },
  {
    id: 284,
    code: '1f91b-1f3fc',
    title: 'left-facing fist: medium-light skin tone'
  },
  { id: 285, code: '1f91b-1f3fd', title: 'left-facing fist: medium skin tone' },
  {
    id: 286,
    code: '1f91b-1f3fe',
    title: 'left-facing fist: medium-dark skin tone'
  },
  { id: 287, code: '1f91b-1f3ff', title: 'left-facing fist: dark skin tone' },
  { id: 288, code: '1f91c', title: 'right-facing fist' },
  { id: 289, code: '1f91c-1f3fb', title: 'right-facing fist: light skin tone' },
  {
    id: 290,
    code: '1f91c-1f3fc',
    title: 'right-facing fist: medium-light skin tone'
  },
  {
    id: 291,
    code: '1f91c-1f3fd',
    title: 'right-facing fist: medium skin tone'
  },
  {
    id: 292,
    code: '1f91c-1f3fe',
    title: 'right-facing fist: medium-dark skin tone'
  },
  { id: 293, code: '1f91c-1f3ff', title: 'right-facing fist: dark skin tone' },
  { id: 294, code: '1f44f', title: 'clapping hands' },
  { id: 295, code: '1f44f-1f3fb', title: 'clapping hands: light skin tone' },
  {
    id: 296,
    code: '1f44f-1f3fc',
    title: 'clapping hands: medium-light skin tone'
  },
  { id: 297, code: '1f44f-1f3fd', title: 'clapping hands: medium skin tone' },
  {
    id: 298,
    code: '1f44f-1f3fe',
    title: 'clapping hands: medium-dark skin tone'
  },
  { id: 299, code: '1f44f-1f3ff', title: 'clapping hands: dark skin tone' },
  { id: 300, code: '1f64c', title: 'raising hands' },
  { id: 301, code: '1f64c-1f3fb', title: 'raising hands: light skin tone' },
  {
    id: 302,
    code: '1f64c-1f3fc',
    title: 'raising hands: medium-light skin tone'
  },
  { id: 303, code: '1f64c-1f3fd', title: 'raising hands: medium skin tone' },
  {
    id: 304,
    code: '1f64c-1f3fe',
    title: 'raising hands: medium-dark skin tone'
  },
  { id: 305, code: '1f64c-1f3ff', title: 'raising hands: dark skin tone' },
  { id: 306, code: '1f450', title: 'open hands' },
  { id: 307, code: '1f450-1f3fb', title: 'open hands: light skin tone' },
  { id: 308, code: '1f450-1f3fc', title: 'open hands: medium-light skin tone' },
  { id: 309, code: '1f450-1f3fd', title: 'open hands: medium skin tone' },
  { id: 310, code: '1f450-1f3fe', title: 'open hands: medium-dark skin tone' },
  { id: 311, code: '1f450-1f3ff', title: 'open hands: dark skin tone' },
  { id: 312, code: '1f932', title: 'palms up together' },
  { id: 313, code: '1f932-1f3fb', title: 'palms up together: light skin tone' },
  {
    id: 314,
    code: '1f932-1f3fc',
    title: 'palms up together: medium-light skin tone'
  },
  {
    id: 315,
    code: '1f932-1f3fd',
    title: 'palms up together: medium skin tone'
  },
  {
    id: 316,
    code: '1f932-1f3fe',
    title: 'palms up together: medium-dark skin tone'
  },
  { id: 317, code: '1f932-1f3ff', title: 'palms up together: dark skin tone' },
  { id: 318, code: '1f91d', title: 'handshake' },
  { id: 319, code: '1f64f', title: 'folded hands' },
  { id: 320, code: '1f64f-1f3fb', title: 'folded hands: light skin tone' },
  {
    id: 321,
    code: '1f64f-1f3fc',
    title: 'folded hands: medium-light skin tone'
  },
  { id: 322, code: '1f64f-1f3fd', title: 'folded hands: medium skin tone' },
  {
    id: 323,
    code: '1f64f-1f3fe',
    title: 'folded hands: medium-dark skin tone'
  },
  { id: 324, code: '1f64f-1f3ff', title: 'folded hands: dark skin tone' },
  { id: 325, code: '270d', title: 'writing hand' },
  { id: 326, code: '270d-1f3fb', title: 'writing hand: light skin tone' },
  {
    id: 327,
    code: '270d-1f3fc',
    title: 'writing hand: medium-light skin tone'
  },
  { id: 328, code: '270d-1f3fd', title: 'writing hand: medium skin tone' },
  { id: 329, code: '270d-1f3fe', title: 'writing hand: medium-dark skin tone' },
  { id: 330, code: '270d-1f3ff', title: 'writing hand: dark skin tone' },
  { id: 331, code: '1f485', title: 'nail polish' },
  { id: 332, code: '1f485-1f3fb', title: 'nail polish: light skin tone' },
  {
    id: 333,
    code: '1f485-1f3fc',
    title: 'nail polish: medium-light skin tone'
  },
  { id: 334, code: '1f485-1f3fd', title: 'nail polish: medium skin tone' },
  { id: 335, code: '1f485-1f3fe', title: 'nail polish: medium-dark skin tone' },
  { id: 336, code: '1f485-1f3ff', title: 'nail polish: dark skin tone' },
  { id: 337, code: '1f933', title: 'selfie' },
  { id: 338, code: '1f933-1f3fb', title: 'selfie: light skin tone' },
  { id: 339, code: '1f933-1f3fc', title: 'selfie: medium-light skin tone' },
  { id: 340, code: '1f933-1f3fd', title: 'selfie: medium skin tone' },
  { id: 341, code: '1f933-1f3fe', title: 'selfie: medium-dark skin tone' },
  { id: 342, code: '1f933-1f3ff', title: 'selfie: dark skin tone' },
  { id: 343, code: '1f4aa', title: 'flexed biceps' },
  { id: 344, code: '1f4aa-1f3fb', title: 'flexed biceps: light skin tone' },
  {
    id: 345,
    code: '1f4aa-1f3fc',
    title: 'flexed biceps: medium-light skin tone'
  },
  { id: 346, code: '1f4aa-1f3fd', title: 'flexed biceps: medium skin tone' },
  {
    id: 347,
    code: '1f4aa-1f3fe',
    title: 'flexed biceps: medium-dark skin tone'
  },
  { id: 348, code: '1f4aa-1f3ff', title: 'flexed biceps: dark skin tone' },
  { id: 349, code: '1f9be', title: 'mechanical arm' },
  { id: 350, code: '1f9bf', title: 'mechanical leg' },
  { id: 351, code: '1f9b5', title: 'leg' },
  { id: 352, code: '1f9b5-1f3fb', title: 'leg: light skin tone' },
  { id: 353, code: '1f9b5-1f3fc', title: 'leg: medium-light skin tone' },
  { id: 354, code: '1f9b5-1f3fd', title: 'leg: medium skin tone' },
  { id: 355, code: '1f9b5-1f3fe', title: 'leg: medium-dark skin tone' },
  { id: 356, code: '1f9b5-1f3ff', title: 'leg: dark skin tone' },
  { id: 357, code: '1f9b6', title: 'foot' },
  { id: 358, code: '1f9b6-1f3fb', title: 'foot: light skin tone' },
  { id: 359, code: '1f9b6-1f3fc', title: 'foot: medium-light skin tone' },
  { id: 360, code: '1f9b6-1f3fd', title: 'foot: medium skin tone' },
  { id: 361, code: '1f9b6-1f3fe', title: 'foot: medium-dark skin tone' },
  { id: 362, code: '1f9b6-1f3ff', title: 'foot: dark skin tone' },
  { id: 363, code: '1f442', title: 'ear' },
  { id: 364, code: '1f442-1f3fb', title: 'ear: light skin tone' },
  { id: 365, code: '1f442-1f3fc', title: 'ear: medium-light skin tone' },
  { id: 366, code: '1f442-1f3fd', title: 'ear: medium skin tone' },
  { id: 367, code: '1f442-1f3fe', title: 'ear: medium-dark skin tone' },
  { id: 368, code: '1f442-1f3ff', title: 'ear: dark skin tone' },
  { id: 369, code: '1f9bb', title: 'ear with hearing aid' },
  {
    id: 370,
    code: '1f9bb-1f3fb',
    title: 'ear with hearing aid: light skin tone'
  },
  {
    id: 371,
    code: '1f9bb-1f3fc',
    title: 'ear with hearing aid: medium-light skin tone'
  },
  {
    id: 372,
    code: '1f9bb-1f3fd',
    title: 'ear with hearing aid: medium skin tone'
  },
  {
    id: 373,
    code: '1f9bb-1f3fe',
    title: 'ear with hearing aid: medium-dark skin tone'
  },
  {
    id: 374,
    code: '1f9bb-1f3ff',
    title: 'ear with hearing aid: dark skin tone'
  },
  { id: 375, code: '1f443', title: 'nose' },
  { id: 376, code: '1f443-1f3fb', title: 'nose: light skin tone' },
  { id: 377, code: '1f443-1f3fc', title: 'nose: medium-light skin tone' },
  { id: 378, code: '1f443-1f3fd', title: 'nose: medium skin tone' },
  { id: 379, code: '1f443-1f3fe', title: 'nose: medium-dark skin tone' },
  { id: 380, code: '1f443-1f3ff', title: 'nose: dark skin tone' },
  { id: 381, code: '1f9e0', title: 'brain' },
  { id: 382, code: '1f9b7', title: 'tooth' },
  { id: 383, code: '1f9b4', title: 'bone' },
  { id: 384, code: '1f440', title: 'eyes' },
  { id: 385, code: '1f441', title: 'eye' },
  { id: 386, code: '1f445', title: 'tongue' },
  { id: 387, code: '1f444', title: 'mouth' },
  { id: 388, code: '1f476', title: 'baby' },
  { id: 389, code: '1f476-1f3fb', title: 'baby: light skin tone' },
  { id: 390, code: '1f476-1f3fc', title: 'baby: medium-light skin tone' },
  { id: 391, code: '1f476-1f3fd', title: 'baby: medium skin tone' },
  { id: 392, code: '1f476-1f3fe', title: 'baby: medium-dark skin tone' },
  { id: 393, code: '1f476-1f3ff', title: 'baby: dark skin tone' },
  { id: 394, code: '1f9d2', title: 'child' },
  { id: 395, code: '1f9d2-1f3fb', title: 'child: light skin tone' },
  { id: 396, code: '1f9d2-1f3fc', title: 'child: medium-light skin tone' },
  { id: 397, code: '1f9d2-1f3fd', title: 'child: medium skin tone' },
  { id: 398, code: '1f9d2-1f3fe', title: 'child: medium-dark skin tone' },
  { id: 399, code: '1f9d2-1f3ff', title: 'child: dark skin tone' },
  { id: 400, code: '1f466', title: 'boy' },
  { id: 401, code: '1f466-1f3fb', title: 'boy: light skin tone' },
  { id: 402, code: '1f466-1f3fc', title: 'boy: medium-light skin tone' },
  { id: 403, code: '1f466-1f3fd', title: 'boy: medium skin tone' },
  { id: 404, code: '1f466-1f3fe', title: 'boy: medium-dark skin tone' },
  { id: 405, code: '1f466-1f3ff', title: 'boy: dark skin tone' },
  { id: 406, code: '1f467', title: 'girl' },
  { id: 407, code: '1f467-1f3fb', title: 'girl: light skin tone' },
  { id: 408, code: '1f467-1f3fc', title: 'girl: medium-light skin tone' },
  { id: 409, code: '1f467-1f3fd', title: 'girl: medium skin tone' },
  { id: 410, code: '1f467-1f3fe', title: 'girl: medium-dark skin tone' },
  { id: 411, code: '1f467-1f3ff', title: 'girl: dark skin tone' },
  { id: 412, code: '1f9d1', title: 'person' },
  { id: 413, code: '1f9d1-1f3fb', title: 'person: light skin tone' },
  { id: 414, code: '1f9d1-1f3fc', title: 'person: medium-light skin tone' },
  { id: 415, code: '1f9d1-1f3fd', title: 'person: medium skin tone' },
  { id: 416, code: '1f9d1-1f3fe', title: 'person: medium-dark skin tone' },
  { id: 417, code: '1f9d1-1f3ff', title: 'person: dark skin tone' },
  { id: 418, code: '1f471', title: 'person: blond hair' },
  {
    id: 419,
    code: '1f471-1f3fb',
    title: 'person: light skin tone, blond hair'
  },
  {
    id: 420,
    code: '1f471-1f3fc',
    title: 'person: medium-light skin tone, blond hair'
  },
  {
    id: 421,
    code: '1f471-1f3fd',
    title: 'person: medium skin tone, blond hair'
  },
  {
    id: 422,
    code: '1f471-1f3fe',
    title: 'person: medium-dark skin tone, blond hair'
  },
  { id: 423, code: '1f471-1f3ff', title: 'person: dark skin tone, blond hair' },
  { id: 424, code: '1f468', title: 'man' },
  { id: 425, code: '1f468-1f3fb', title: 'man: light skin tone' },
  { id: 426, code: '1f468-1f3fc', title: 'man: medium-light skin tone' },
  { id: 427, code: '1f468-1f3fd', title: 'man: medium skin tone' },
  { id: 428, code: '1f468-1f3fe', title: 'man: medium-dark skin tone' },
  { id: 429, code: '1f468-1f3ff', title: 'man: dark skin tone' },
  { id: 430, code: '1f9d4', title: 'man: beard' },
  { id: 431, code: '1f9d4-1f3fb', title: 'man: light skin tone, beard' },
  { id: 432, code: '1f9d4-1f3fc', title: 'man: medium-light skin tone, beard' },
  { id: 433, code: '1f9d4-1f3fd', title: 'man: medium skin tone, beard' },
  { id: 434, code: '1f9d4-1f3fe', title: 'man: medium-dark skin tone, beard' },
  { id: 435, code: '1f9d4-1f3ff', title: 'man: dark skin tone, beard' },
  { id: 436, code: '1f468-200d-1f9b0', title: 'man: red hair' },
  {
    id: 437,
    code: '1f468-1f3fb-200d-1f9b0',
    title: 'man: light skin tone, red hair'
  },
  {
    id: 438,
    code: '1f468-1f3fc-200d-1f9b0',
    title: 'man: medium-light skin tone, red hair'
  },
  {
    id: 439,
    code: '1f468-1f3fd-200d-1f9b0',
    title: 'man: medium skin tone, red hair'
  },
  {
    id: 440,
    code: '1f468-1f3fe-200d-1f9b0',
    title: 'man: medium-dark skin tone, red hair'
  },
  {
    id: 441,
    code: '1f468-1f3ff-200d-1f9b0',
    title: 'man: dark skin tone, red hair'
  },
  { id: 442, code: '1f468-200d-1f9b1', title: 'man: curly hair' },
  {
    id: 443,
    code: '1f468-1f3fb-200d-1f9b1',
    title: 'man: light skin tone, curly hair'
  },
  {
    id: 444,
    code: '1f468-1f3fc-200d-1f9b1',
    title: 'man: medium-light skin tone, curly hair'
  },
  {
    id: 445,
    code: '1f468-1f3fd-200d-1f9b1',
    title: 'man: medium skin tone, curly hair'
  },
  {
    id: 446,
    code: '1f468-1f3fe-200d-1f9b1',
    title: 'man: medium-dark skin tone, curly hair'
  },
  {
    id: 447,
    code: '1f468-1f3ff-200d-1f9b1',
    title: 'man: dark skin tone, curly hair'
  },
  { id: 448, code: '1f468-200d-1f9b3', title: 'man: white hair' },
  {
    id: 449,
    code: '1f468-1f3fb-200d-1f9b3',
    title: 'man: light skin tone, white hair'
  },
  {
    id: 450,
    code: '1f468-1f3fc-200d-1f9b3',
    title: 'man: medium-light skin tone, white hair'
  },
  {
    id: 451,
    code: '1f468-1f3fd-200d-1f9b3',
    title: 'man: medium skin tone, white hair'
  },
  {
    id: 452,
    code: '1f468-1f3fe-200d-1f9b3',
    title: 'man: medium-dark skin tone, white hair'
  },
  {
    id: 453,
    code: '1f468-1f3ff-200d-1f9b3',
    title: 'man: dark skin tone, white hair'
  },
  { id: 454, code: '1f468-200d-1f9b2', title: 'man: bald' },
  {
    id: 455,
    code: '1f468-1f3fb-200d-1f9b2',
    title: 'man: light skin tone, bald'
  },
  {
    id: 456,
    code: '1f468-1f3fc-200d-1f9b2',
    title: 'man: medium-light skin tone, bald'
  },
  {
    id: 457,
    code: '1f468-1f3fd-200d-1f9b2',
    title: 'man: medium skin tone, bald'
  },
  {
    id: 458,
    code: '1f468-1f3fe-200d-1f9b2',
    title: 'man: medium-dark skin tone, bald'
  },
  {
    id: 459,
    code: '1f468-1f3ff-200d-1f9b2',
    title: 'man: dark skin tone, bald'
  },
  { id: 460, code: '1f469', title: 'woman' },
  { id: 461, code: '1f469-1f3fb', title: 'woman: light skin tone' },
  { id: 462, code: '1f469-1f3fc', title: 'woman: medium-light skin tone' },
  { id: 463, code: '1f469-1f3fd', title: 'woman: medium skin tone' },
  { id: 464, code: '1f469-1f3fe', title: 'woman: medium-dark skin tone' },
  { id: 465, code: '1f469-1f3ff', title: 'woman: dark skin tone' },
  { id: 466, code: '1f469-200d-1f9b0', title: 'woman: red hair' },
  {
    id: 467,
    code: '1f469-1f3fb-200d-1f9b0',
    title: 'woman: light skin tone, red hair'
  },
  {
    id: 468,
    code: '1f469-1f3fc-200d-1f9b0',
    title: 'woman: medium-light skin tone, red hair'
  },
  {
    id: 469,
    code: '1f469-1f3fd-200d-1f9b0',
    title: 'woman: medium skin tone, red hair'
  },
  {
    id: 470,
    code: '1f469-1f3fe-200d-1f9b0',
    title: 'woman: medium-dark skin tone, red hair'
  },
  {
    id: 471,
    code: '1f469-1f3ff-200d-1f9b0',
    title: 'woman: dark skin tone, red hair'
  },
  { id: 472, code: '1f9d1-200d-1f9b0', title: 'person: red hair' },
  {
    id: 473,
    code: '1f9d1-1f3fb-200d-1f9b0',
    title: 'person: light skin tone, red hair'
  },
  {
    id: 474,
    code: '1f9d1-1f3fc-200d-1f9b0',
    title: 'person: medium-light skin tone, red hair'
  },
  {
    id: 475,
    code: '1f9d1-1f3fd-200d-1f9b0',
    title: 'person: medium skin tone, red hair'
  },
  {
    id: 476,
    code: '1f9d1-1f3fe-200d-1f9b0',
    title: 'person: medium-dark skin tone, red hair'
  },
  {
    id: 477,
    code: '1f9d1-1f3ff-200d-1f9b0',
    title: 'person: dark skin tone, red hair'
  },
  { id: 478, code: '1f469-200d-1f9b1', title: 'woman: curly hair' },
  {
    id: 479,
    code: '1f469-1f3fb-200d-1f9b1',
    title: 'woman: light skin tone, curly hair'
  },
  {
    id: 480,
    code: '1f469-1f3fc-200d-1f9b1',
    title: 'woman: medium-light skin tone, curly hair'
  },
  {
    id: 481,
    code: '1f469-1f3fd-200d-1f9b1',
    title: 'woman: medium skin tone, curly hair'
  },
  {
    id: 482,
    code: '1f469-1f3fe-200d-1f9b1',
    title: 'woman: medium-dark skin tone, curly hair'
  },
  {
    id: 483,
    code: '1f469-1f3ff-200d-1f9b1',
    title: 'woman: dark skin tone, curly hair'
  },
  { id: 484, code: '1f9d1-200d-1f9b1', title: 'person: curly hair' },
  {
    id: 485,
    code: '1f9d1-1f3fb-200d-1f9b1',
    title: 'person: light skin tone, curly hair'
  },
  {
    id: 486,
    code: '1f9d1-1f3fc-200d-1f9b1',
    title: 'person: medium-light skin tone, curly hair'
  },
  {
    id: 487,
    code: '1f9d1-1f3fd-200d-1f9b1',
    title: 'person: medium skin tone, curly hair'
  },
  {
    id: 488,
    code: '1f9d1-1f3fe-200d-1f9b1',
    title: 'person: medium-dark skin tone, curly hair'
  },
  {
    id: 489,
    code: '1f9d1-1f3ff-200d-1f9b1',
    title: 'person: dark skin tone, curly hair'
  },
  { id: 490, code: '1f469-200d-1f9b3', title: 'woman: white hair' },
  {
    id: 491,
    code: '1f469-1f3fb-200d-1f9b3',
    title: 'woman: light skin tone, white hair'
  },
  {
    id: 492,
    code: '1f469-1f3fc-200d-1f9b3',
    title: 'woman: medium-light skin tone, white hair'
  },
  {
    id: 493,
    code: '1f469-1f3fd-200d-1f9b3',
    title: 'woman: medium skin tone, white hair'
  },
  {
    id: 494,
    code: '1f469-1f3fe-200d-1f9b3',
    title: 'woman: medium-dark skin tone, white hair'
  },
  {
    id: 495,
    code: '1f469-1f3ff-200d-1f9b3',
    title: 'woman: dark skin tone, white hair'
  },
  { id: 496, code: '1f9d1-200d-1f9b3', title: 'person: white hair' },
  {
    id: 497,
    code: '1f9d1-1f3fb-200d-1f9b3',
    title: 'person: light skin tone, white hair'
  },
  {
    id: 498,
    code: '1f9d1-1f3fc-200d-1f9b3',
    title: 'person: medium-light skin tone, white hair'
  },
  {
    id: 499,
    code: '1f9d1-1f3fd-200d-1f9b3',
    title: 'person: medium skin tone, white hair'
  },
  {
    id: 500,
    code: '1f9d1-1f3fe-200d-1f9b3',
    title: 'person: medium-dark skin tone, white hair'
  },
  {
    id: 501,
    code: '1f9d1-1f3ff-200d-1f9b3',
    title: 'person: dark skin tone, white hair'
  },
  { id: 502, code: '1f469-200d-1f9b2', title: 'woman: bald' },
  {
    id: 503,
    code: '1f469-1f3fb-200d-1f9b2',
    title: 'woman: light skin tone, bald'
  },
  {
    id: 504,
    code: '1f469-1f3fc-200d-1f9b2',
    title: 'woman: medium-light skin tone, bald'
  },
  {
    id: 505,
    code: '1f469-1f3fd-200d-1f9b2',
    title: 'woman: medium skin tone, bald'
  },
  {
    id: 506,
    code: '1f469-1f3fe-200d-1f9b2',
    title: 'woman: medium-dark skin tone, bald'
  },
  {
    id: 507,
    code: '1f469-1f3ff-200d-1f9b2',
    title: 'woman: dark skin tone, bald'
  },
  { id: 508, code: '1f9d1-200d-1f9b2', title: 'person: bald' },
  {
    id: 509,
    code: '1f9d1-1f3fb-200d-1f9b2',
    title: 'person: light skin tone, bald'
  },
  {
    id: 510,
    code: '1f9d1-1f3fc-200d-1f9b2',
    title: 'person: medium-light skin tone, bald'
  },
  {
    id: 511,
    code: '1f9d1-1f3fd-200d-1f9b2',
    title: 'person: medium skin tone, bald'
  },
  {
    id: 512,
    code: '1f9d1-1f3fe-200d-1f9b2',
    title: 'person: medium-dark skin tone, bald'
  },
  {
    id: 513,
    code: '1f9d1-1f3ff-200d-1f9b2',
    title: 'person: dark skin tone, bald'
  },
  { id: 514, code: '1f471-200d-2640-fe0f', title: 'woman: blond hair' },
  {
    id: 515,
    code: '1f471-1f3fb-200d-2640-fe0f',
    title: 'woman: light skin tone, blond hair'
  },
  {
    id: 516,
    code: '1f471-1f3fc-200d-2640-fe0f',
    title: 'woman: medium-light skin tone, blond hair'
  },
  {
    id: 517,
    code: '1f471-1f3fd-200d-2640-fe0f',
    title: 'woman: medium skin tone, blond hair'
  },
  {
    id: 518,
    code: '1f471-1f3fe-200d-2640-fe0f',
    title: 'woman: medium-dark skin tone, blond hair'
  },
  {
    id: 519,
    code: '1f471-1f3ff-200d-2640-fe0f',
    title: 'woman: dark skin tone, blond hair'
  },
  { id: 520, code: '1f471-200d-2642-fe0f', title: 'man: blond hair' },
  {
    id: 521,
    code: '1f471-1f3fb-200d-2642-fe0f',
    title: 'man: light skin tone, blond hair'
  },
  {
    id: 522,
    code: '1f471-1f3fc-200d-2642-fe0f',
    title: 'man: medium-light skin tone, blond hair'
  },
  {
    id: 523,
    code: '1f471-1f3fd-200d-2642-fe0f',
    title: 'man: medium skin tone, blond hair'
  },
  {
    id: 524,
    code: '1f471-1f3fe-200d-2642-fe0f',
    title: 'man: medium-dark skin tone, blond hair'
  },
  {
    id: 525,
    code: '1f471-1f3ff-200d-2642-fe0f',
    title: 'man: dark skin tone, blond hair'
  },
  { id: 526, code: '1f9d3', title: 'older person' },
  { id: 527, code: '1f9d3-1f3fb', title: 'older person: light skin tone' },
  {
    id: 528,
    code: '1f9d3-1f3fc',
    title: 'older person: medium-light skin tone'
  },
  { id: 529, code: '1f9d3-1f3fd', title: 'older person: medium skin tone' },
  {
    id: 530,
    code: '1f9d3-1f3fe',
    title: 'older person: medium-dark skin tone'
  },
  { id: 531, code: '1f9d3-1f3ff', title: 'older person: dark skin tone' },
  { id: 532, code: '1f474', title: 'old man' },
  { id: 533, code: '1f474-1f3fb', title: 'old man: light skin tone' },
  { id: 534, code: '1f474-1f3fc', title: 'old man: medium-light skin tone' },
  { id: 535, code: '1f474-1f3fd', title: 'old man: medium skin tone' },
  { id: 536, code: '1f474-1f3fe', title: 'old man: medium-dark skin tone' },
  { id: 537, code: '1f474-1f3ff', title: 'old man: dark skin tone' },
  { id: 538, code: '1f475', title: 'old woman' },
  { id: 539, code: '1f475-1f3fb', title: 'old woman: light skin tone' },
  { id: 540, code: '1f475-1f3fc', title: 'old woman: medium-light skin tone' },
  { id: 541, code: '1f475-1f3fd', title: 'old woman: medium skin tone' },
  { id: 542, code: '1f475-1f3fe', title: 'old woman: medium-dark skin tone' },
  { id: 543, code: '1f475-1f3ff', title: 'old woman: dark skin tone' },
  { id: 544, code: '1f64d', title: 'person frowning' },
  { id: 545, code: '1f64d-1f3fb', title: 'person frowning: light skin tone' },
  {
    id: 546,
    code: '1f64d-1f3fc',
    title: 'person frowning: medium-light skin tone'
  },
  { id: 547, code: '1f64d-1f3fd', title: 'person frowning: medium skin tone' },
  {
    id: 548,
    code: '1f64d-1f3fe',
    title: 'person frowning: medium-dark skin tone'
  },
  { id: 549, code: '1f64d-1f3ff', title: 'person frowning: dark skin tone' },
  { id: 550, code: '1f64d-200d-2642-fe0f', title: 'man frowning' },
  {
    id: 551,
    code: '1f64d-1f3fb-200d-2642-fe0f',
    title: 'man frowning: light skin tone'
  },
  {
    id: 552,
    code: '1f64d-1f3fc-200d-2642-fe0f',
    title: 'man frowning: medium-light skin tone'
  },
  {
    id: 553,
    code: '1f64d-1f3fd-200d-2642-fe0f',
    title: 'man frowning: medium skin tone'
  },
  {
    id: 554,
    code: '1f64d-1f3fe-200d-2642-fe0f',
    title: 'man frowning: medium-dark skin tone'
  },
  {
    id: 555,
    code: '1f64d-1f3ff-200d-2642-fe0f',
    title: 'man frowning: dark skin tone'
  },
  { id: 556, code: '1f64d-200d-2640-fe0f', title: 'woman frowning' },
  {
    id: 557,
    code: '1f64d-1f3fb-200d-2640-fe0f',
    title: 'woman frowning: light skin tone'
  },
  {
    id: 558,
    code: '1f64d-1f3fc-200d-2640-fe0f',
    title: 'woman frowning: medium-light skin tone'
  },
  {
    id: 559,
    code: '1f64d-1f3fd-200d-2640-fe0f',
    title: 'woman frowning: medium skin tone'
  },
  {
    id: 560,
    code: '1f64d-1f3fe-200d-2640-fe0f',
    title: 'woman frowning: medium-dark skin tone'
  },
  {
    id: 561,
    code: '1f64d-1f3ff-200d-2640-fe0f',
    title: 'woman frowning: dark skin tone'
  },
  { id: 562, code: '1f64e', title: 'person pouting' },
  { id: 563, code: '1f64e-1f3fb', title: 'person pouting: light skin tone' },
  {
    id: 564,
    code: '1f64e-1f3fc',
    title: 'person pouting: medium-light skin tone'
  },
  { id: 565, code: '1f64e-1f3fd', title: 'person pouting: medium skin tone' },
  {
    id: 566,
    code: '1f64e-1f3fe',
    title: 'person pouting: medium-dark skin tone'
  },
  { id: 567, code: '1f64e-1f3ff', title: 'person pouting: dark skin tone' },
  { id: 568, code: '1f64e-200d-2642-fe0f', title: 'man pouting' },
  {
    id: 569,
    code: '1f64e-1f3fb-200d-2642-fe0f',
    title: 'man pouting: light skin tone'
  },
  {
    id: 570,
    code: '1f64e-1f3fc-200d-2642-fe0f',
    title: 'man pouting: medium-light skin tone'
  },
  {
    id: 571,
    code: '1f64e-1f3fd-200d-2642-fe0f',
    title: 'man pouting: medium skin tone'
  },
  {
    id: 572,
    code: '1f64e-1f3fe-200d-2642-fe0f',
    title: 'man pouting: medium-dark skin tone'
  },
  {
    id: 573,
    code: '1f64e-1f3ff-200d-2642-fe0f',
    title: 'man pouting: dark skin tone'
  },
  { id: 574, code: '1f64e-200d-2640-fe0f', title: 'woman pouting' },
  {
    id: 575,
    code: '1f64e-1f3fb-200d-2640-fe0f',
    title: 'woman pouting: light skin tone'
  },
  {
    id: 576,
    code: '1f64e-1f3fc-200d-2640-fe0f',
    title: 'woman pouting: medium-light skin tone'
  },
  {
    id: 577,
    code: '1f64e-1f3fd-200d-2640-fe0f',
    title: 'woman pouting: medium skin tone'
  },
  {
    id: 578,
    code: '1f64e-1f3fe-200d-2640-fe0f',
    title: 'woman pouting: medium-dark skin tone'
  },
  {
    id: 579,
    code: '1f64e-1f3ff-200d-2640-fe0f',
    title: 'woman pouting: dark skin tone'
  },
  { id: 580, code: '1f645', title: 'person gesturing no' },
  {
    id: 581,
    code: '1f645-1f3fb',
    title: 'person gesturing no: light skin tone'
  },
  {
    id: 582,
    code: '1f645-1f3fc',
    title: 'person gesturing no: medium-light skin tone'
  },
  {
    id: 583,
    code: '1f645-1f3fd',
    title: 'person gesturing no: medium skin tone'
  },
  {
    id: 584,
    code: '1f645-1f3fe',
    title: 'person gesturing no: medium-dark skin tone'
  },
  {
    id: 585,
    code: '1f645-1f3ff',
    title: 'person gesturing no: dark skin tone'
  },
  { id: 586, code: '1f645-200d-2642-fe0f', title: 'man gesturing no' },
  {
    id: 587,
    code: '1f645-1f3fb-200d-2642-fe0f',
    title: 'man gesturing no: light skin tone'
  },
  {
    id: 588,
    code: '1f645-1f3fc-200d-2642-fe0f',
    title: 'man gesturing no: medium-light skin tone'
  },
  {
    id: 589,
    code: '1f645-1f3fd-200d-2642-fe0f',
    title: 'man gesturing no: medium skin tone'
  },
  {
    id: 590,
    code: '1f645-1f3fe-200d-2642-fe0f',
    title: 'man gesturing no: medium-dark skin tone'
  },
  {
    id: 591,
    code: '1f645-1f3ff-200d-2642-fe0f',
    title: 'man gesturing no: dark skin tone'
  },
  { id: 592, code: '1f645-200d-2640-fe0f', title: 'woman gesturing no' },
  {
    id: 593,
    code: '1f645-1f3fb-200d-2640-fe0f',
    title: 'woman gesturing no: light skin tone'
  },
  {
    id: 594,
    code: '1f645-1f3fc-200d-2640-fe0f',
    title: 'woman gesturing no: medium-light skin tone'
  },
  {
    id: 595,
    code: '1f645-1f3fd-200d-2640-fe0f',
    title: 'woman gesturing no: medium skin tone'
  },
  {
    id: 596,
    code: '1f645-1f3fe-200d-2640-fe0f',
    title: 'woman gesturing no: medium-dark skin tone'
  },
  {
    id: 597,
    code: '1f645-1f3ff-200d-2640-fe0f',
    title: 'woman gesturing no: dark skin tone'
  },
  { id: 598, code: '1f646', title: 'person gesturing ok' },
  {
    id: 599,
    code: '1f646-1f3fb',
    title: 'person gesturing ok: light skin tone'
  },
  {
    id: 600,
    code: '1f646-1f3fc',
    title: 'person gesturing ok: medium-light skin tone'
  },
  {
    id: 601,
    code: '1f646-1f3fd',
    title: 'person gesturing ok: medium skin tone'
  },
  {
    id: 602,
    code: '1f646-1f3fe',
    title: 'person gesturing ok: medium-dark skin tone'
  },
  {
    id: 603,
    code: '1f646-1f3ff',
    title: 'person gesturing ok: dark skin tone'
  },
  { id: 604, code: '1f646-200d-2642-fe0f', title: 'man gesturing ok' },
  {
    id: 605,
    code: '1f646-1f3fb-200d-2642-fe0f',
    title: 'man gesturing ok: light skin tone'
  },
  {
    id: 606,
    code: '1f646-1f3fc-200d-2642-fe0f',
    title: 'man gesturing ok: medium-light skin tone'
  },
  {
    id: 607,
    code: '1f646-1f3fd-200d-2642-fe0f',
    title: 'man gesturing ok: medium skin tone'
  },
  {
    id: 608,
    code: '1f646-1f3fe-200d-2642-fe0f',
    title: 'man gesturing ok: medium-dark skin tone'
  },
  {
    id: 609,
    code: '1f646-1f3ff-200d-2642-fe0f',
    title: 'man gesturing ok: dark skin tone'
  },
  { id: 610, code: '1f646-200d-2640-fe0f', title: 'woman gesturing ok' },
  {
    id: 611,
    code: '1f646-1f3fb-200d-2640-fe0f',
    title: 'woman gesturing ok: light skin tone'
  },
  {
    id: 612,
    code: '1f646-1f3fc-200d-2640-fe0f',
    title: 'woman gesturing ok: medium-light skin tone'
  },
  {
    id: 613,
    code: '1f646-1f3fd-200d-2640-fe0f',
    title: 'woman gesturing ok: medium skin tone'
  },
  {
    id: 614,
    code: '1f646-1f3fe-200d-2640-fe0f',
    title: 'woman gesturing ok: medium-dark skin tone'
  },
  {
    id: 615,
    code: '1f646-1f3ff-200d-2640-fe0f',
    title: 'woman gesturing ok: dark skin tone'
  },
  { id: 616, code: '1f481', title: 'person tipping hand' },
  {
    id: 617,
    code: '1f481-1f3fb',
    title: 'person tipping hand: light skin tone'
  },
  {
    id: 618,
    code: '1f481-1f3fc',
    title: 'person tipping hand: medium-light skin tone'
  },
  {
    id: 619,
    code: '1f481-1f3fd',
    title: 'person tipping hand: medium skin tone'
  },
  {
    id: 620,
    code: '1f481-1f3fe',
    title: 'person tipping hand: medium-dark skin tone'
  },
  {
    id: 621,
    code: '1f481-1f3ff',
    title: 'person tipping hand: dark skin tone'
  },
  { id: 622, code: '1f481-200d-2642-fe0f', title: 'man tipping hand' },
  {
    id: 623,
    code: '1f481-1f3fb-200d-2642-fe0f',
    title: 'man tipping hand: light skin tone'
  },
  {
    id: 624,
    code: '1f481-1f3fc-200d-2642-fe0f',
    title: 'man tipping hand: medium-light skin tone'
  },
  {
    id: 625,
    code: '1f481-1f3fd-200d-2642-fe0f',
    title: 'man tipping hand: medium skin tone'
  },
  {
    id: 626,
    code: '1f481-1f3fe-200d-2642-fe0f',
    title: 'man tipping hand: medium-dark skin tone'
  },
  {
    id: 627,
    code: '1f481-1f3ff-200d-2642-fe0f',
    title: 'man tipping hand: dark skin tone'
  },
  { id: 628, code: '1f481-200d-2640-fe0f', title: 'woman tipping hand' },
  {
    id: 629,
    code: '1f481-1f3fb-200d-2640-fe0f',
    title: 'woman tipping hand: light skin tone'
  },
  {
    id: 630,
    code: '1f481-1f3fc-200d-2640-fe0f',
    title: 'woman tipping hand: medium-light skin tone'
  },
  {
    id: 631,
    code: '1f481-1f3fd-200d-2640-fe0f',
    title: 'woman tipping hand: medium skin tone'
  },
  {
    id: 632,
    code: '1f481-1f3fe-200d-2640-fe0f',
    title: 'woman tipping hand: medium-dark skin tone'
  },
  {
    id: 633,
    code: '1f481-1f3ff-200d-2640-fe0f',
    title: 'woman tipping hand: dark skin tone'
  },
  { id: 634, code: '1f64b', title: 'person raising hand' },
  {
    id: 635,
    code: '1f64b-1f3fb',
    title: 'person raising hand: light skin tone'
  },
  {
    id: 636,
    code: '1f64b-1f3fc',
    title: 'person raising hand: medium-light skin tone'
  },
  {
    id: 637,
    code: '1f64b-1f3fd',
    title: 'person raising hand: medium skin tone'
  },
  {
    id: 638,
    code: '1f64b-1f3fe',
    title: 'person raising hand: medium-dark skin tone'
  },
  {
    id: 639,
    code: '1f64b-1f3ff',
    title: 'person raising hand: dark skin tone'
  },
  { id: 640, code: '1f64b-200d-2642-fe0f', title: 'man raising hand' },
  {
    id: 641,
    code: '1f64b-1f3fb-200d-2642-fe0f',
    title: 'man raising hand: light skin tone'
  },
  {
    id: 642,
    code: '1f64b-1f3fc-200d-2642-fe0f',
    title: 'man raising hand: medium-light skin tone'
  },
  {
    id: 643,
    code: '1f64b-1f3fd-200d-2642-fe0f',
    title: 'man raising hand: medium skin tone'
  },
  {
    id: 644,
    code: '1f64b-1f3fe-200d-2642-fe0f',
    title: 'man raising hand: medium-dark skin tone'
  },
  {
    id: 645,
    code: '1f64b-1f3ff-200d-2642-fe0f',
    title: 'man raising hand: dark skin tone'
  },
  { id: 646, code: '1f64b-200d-2640-fe0f', title: 'woman raising hand' },
  {
    id: 647,
    code: '1f64b-1f3fb-200d-2640-fe0f',
    title: 'woman raising hand: light skin tone'
  },
  {
    id: 648,
    code: '1f64b-1f3fc-200d-2640-fe0f',
    title: 'woman raising hand: medium-light skin tone'
  },
  {
    id: 649,
    code: '1f64b-1f3fd-200d-2640-fe0f',
    title: 'woman raising hand: medium skin tone'
  },
  {
    id: 650,
    code: '1f64b-1f3fe-200d-2640-fe0f',
    title: 'woman raising hand: medium-dark skin tone'
  },
  {
    id: 651,
    code: '1f64b-1f3ff-200d-2640-fe0f',
    title: 'woman raising hand: dark skin tone'
  },
  { id: 652, code: '1f9cf', title: 'deaf person' },
  { id: 653, code: '1f9cf-1f3fb', title: 'deaf person: light skin tone' },
  {
    id: 654,
    code: '1f9cf-1f3fc',
    title: 'deaf person: medium-light skin tone'
  },
  { id: 655, code: '1f9cf-1f3fd', title: 'deaf person: medium skin tone' },
  { id: 656, code: '1f9cf-1f3fe', title: 'deaf person: medium-dark skin tone' },
  { id: 657, code: '1f9cf-1f3ff', title: 'deaf person: dark skin tone' },
  { id: 658, code: '1f9cf-200d-2642-fe0f', title: 'deaf man' },
  {
    id: 659,
    code: '1f9cf-1f3fb-200d-2642-fe0f',
    title: 'deaf man: light skin tone'
  },
  {
    id: 660,
    code: '1f9cf-1f3fc-200d-2642-fe0f',
    title: 'deaf man: medium-light skin tone'
  },
  {
    id: 661,
    code: '1f9cf-1f3fd-200d-2642-fe0f',
    title: 'deaf man: medium skin tone'
  },
  {
    id: 662,
    code: '1f9cf-1f3fe-200d-2642-fe0f',
    title: 'deaf man: medium-dark skin tone'
  },
  {
    id: 663,
    code: '1f9cf-1f3ff-200d-2642-fe0f',
    title: 'deaf man: dark skin tone'
  },
  { id: 664, code: '1f9cf-200d-2640-fe0f', title: 'deaf woman' },
  {
    id: 665,
    code: '1f9cf-1f3fb-200d-2640-fe0f',
    title: 'deaf woman: light skin tone'
  },
  {
    id: 666,
    code: '1f9cf-1f3fc-200d-2640-fe0f',
    title: 'deaf woman: medium-light skin tone'
  },
  {
    id: 667,
    code: '1f9cf-1f3fd-200d-2640-fe0f',
    title: 'deaf woman: medium skin tone'
  },
  {
    id: 668,
    code: '1f9cf-1f3fe-200d-2640-fe0f',
    title: 'deaf woman: medium-dark skin tone'
  },
  {
    id: 669,
    code: '1f9cf-1f3ff-200d-2640-fe0f',
    title: 'deaf woman: dark skin tone'
  },
  { id: 670, code: '1f647', title: 'person bowing' },
  { id: 671, code: '1f647-1f3fb', title: 'person bowing: light skin tone' },
  {
    id: 672,
    code: '1f647-1f3fc',
    title: 'person bowing: medium-light skin tone'
  },
  { id: 673, code: '1f647-1f3fd', title: 'person bowing: medium skin tone' },
  {
    id: 674,
    code: '1f647-1f3fe',
    title: 'person bowing: medium-dark skin tone'
  },
  { id: 675, code: '1f647-1f3ff', title: 'person bowing: dark skin tone' },
  { id: 676, code: '1f647-200d-2642-fe0f', title: 'man bowing' },
  {
    id: 677,
    code: '1f647-1f3fb-200d-2642-fe0f',
    title: 'man bowing: light skin tone'
  },
  {
    id: 678,
    code: '1f647-1f3fc-200d-2642-fe0f',
    title: 'man bowing: medium-light skin tone'
  },
  {
    id: 679,
    code: '1f647-1f3fd-200d-2642-fe0f',
    title: 'man bowing: medium skin tone'
  },
  {
    id: 680,
    code: '1f647-1f3fe-200d-2642-fe0f',
    title: 'man bowing: medium-dark skin tone'
  },
  {
    id: 681,
    code: '1f647-1f3ff-200d-2642-fe0f',
    title: 'man bowing: dark skin tone'
  },
  { id: 682, code: '1f647-200d-2640-fe0f', title: 'woman bowing' },
  {
    id: 683,
    code: '1f647-1f3fb-200d-2640-fe0f',
    title: 'woman bowing: light skin tone'
  },
  {
    id: 684,
    code: '1f647-1f3fc-200d-2640-fe0f',
    title: 'woman bowing: medium-light skin tone'
  },
  {
    id: 685,
    code: '1f647-1f3fd-200d-2640-fe0f',
    title: 'woman bowing: medium skin tone'
  },
  {
    id: 686,
    code: '1f647-1f3fe-200d-2640-fe0f',
    title: 'woman bowing: medium-dark skin tone'
  },
  {
    id: 687,
    code: '1f647-1f3ff-200d-2640-fe0f',
    title: 'woman bowing: dark skin tone'
  },
  { id: 688, code: '1f926', title: 'person facepalming' },
  {
    id: 689,
    code: '1f926-1f3fb',
    title: 'person facepalming: light skin tone'
  },
  {
    id: 690,
    code: '1f926-1f3fc',
    title: 'person facepalming: medium-light skin tone'
  },
  {
    id: 691,
    code: '1f926-1f3fd',
    title: 'person facepalming: medium skin tone'
  },
  {
    id: 692,
    code: '1f926-1f3fe',
    title: 'person facepalming: medium-dark skin tone'
  },
  { id: 693, code: '1f926-1f3ff', title: 'person facepalming: dark skin tone' },
  { id: 694, code: '1f926-200d-2642-fe0f', title: 'man facepalming' },
  {
    id: 695,
    code: '1f926-1f3fb-200d-2642-fe0f',
    title: 'man facepalming: light skin tone'
  },
  {
    id: 696,
    code: '1f926-1f3fc-200d-2642-fe0f',
    title: 'man facepalming: medium-light skin tone'
  },
  {
    id: 697,
    code: '1f926-1f3fd-200d-2642-fe0f',
    title: 'man facepalming: medium skin tone'
  },
  {
    id: 698,
    code: '1f926-1f3fe-200d-2642-fe0f',
    title: 'man facepalming: medium-dark skin tone'
  },
  {
    id: 699,
    code: '1f926-1f3ff-200d-2642-fe0f',
    title: 'man facepalming: dark skin tone'
  },
  { id: 700, code: '1f926-200d-2640-fe0f', title: 'woman facepalming' },
  {
    id: 701,
    code: '1f926-1f3fb-200d-2640-fe0f',
    title: 'woman facepalming: light skin tone'
  },
  {
    id: 702,
    code: '1f926-1f3fc-200d-2640-fe0f',
    title: 'woman facepalming: medium-light skin tone'
  },
  {
    id: 703,
    code: '1f926-1f3fd-200d-2640-fe0f',
    title: 'woman facepalming: medium skin tone'
  },
  {
    id: 704,
    code: '1f926-1f3fe-200d-2640-fe0f',
    title: 'woman facepalming: medium-dark skin tone'
  },
  {
    id: 705,
    code: '1f926-1f3ff-200d-2640-fe0f',
    title: 'woman facepalming: dark skin tone'
  },
  { id: 706, code: '1f937', title: 'person shrugging' },
  { id: 707, code: '1f937-1f3fb', title: 'person shrugging: light skin tone' },
  {
    id: 708,
    code: '1f937-1f3fc',
    title: 'person shrugging: medium-light skin tone'
  },
  { id: 709, code: '1f937-1f3fd', title: 'person shrugging: medium skin tone' },
  {
    id: 710,
    code: '1f937-1f3fe',
    title: 'person shrugging: medium-dark skin tone'
  },
  { id: 711, code: '1f937-1f3ff', title: 'person shrugging: dark skin tone' },
  { id: 712, code: '1f937-200d-2642-fe0f', title: 'man shrugging' },
  {
    id: 713,
    code: '1f937-1f3fb-200d-2642-fe0f',
    title: 'man shrugging: light skin tone'
  },
  {
    id: 714,
    code: '1f937-1f3fc-200d-2642-fe0f',
    title: 'man shrugging: medium-light skin tone'
  },
  {
    id: 715,
    code: '1f937-1f3fd-200d-2642-fe0f',
    title: 'man shrugging: medium skin tone'
  },
  {
    id: 716,
    code: '1f937-1f3fe-200d-2642-fe0f',
    title: 'man shrugging: medium-dark skin tone'
  },
  {
    id: 717,
    code: '1f937-1f3ff-200d-2642-fe0f',
    title: 'man shrugging: dark skin tone'
  },
  { id: 718, code: '1f937-200d-2640-fe0f', title: 'woman shrugging' },
  {
    id: 719,
    code: '1f937-1f3fb-200d-2640-fe0f',
    title: 'woman shrugging: light skin tone'
  },
  {
    id: 720,
    code: '1f937-1f3fc-200d-2640-fe0f',
    title: 'woman shrugging: medium-light skin tone'
  },
  {
    id: 721,
    code: '1f937-1f3fd-200d-2640-fe0f',
    title: 'woman shrugging: medium skin tone'
  },
  {
    id: 722,
    code: '1f937-1f3fe-200d-2640-fe0f',
    title: 'woman shrugging: medium-dark skin tone'
  },
  {
    id: 723,
    code: '1f937-1f3ff-200d-2640-fe0f',
    title: 'woman shrugging: dark skin tone'
  },
  { id: 724, code: '1f9d1-200d-2695-fe0f', title: 'health worker' },
  {
    id: 725,
    code: '1f9d1-1f3fb-200d-2695-fe0f',
    title: 'health worker: light skin tone'
  },
  {
    id: 726,
    code: '1f9d1-1f3fc-200d-2695-fe0f',
    title: 'health worker: medium-light skin tone'
  },
  {
    id: 727,
    code: '1f9d1-1f3fd-200d-2695-fe0f',
    title: 'health worker: medium skin tone'
  },
  {
    id: 728,
    code: '1f9d1-1f3fe-200d-2695-fe0f',
    title: 'health worker: medium-dark skin tone'
  },
  {
    id: 729,
    code: '1f9d1-1f3ff-200d-2695-fe0f',
    title: 'health worker: dark skin tone'
  },
  { id: 730, code: '1f468-200d-2695-fe0f', title: 'man health worker' },
  {
    id: 731,
    code: '1f468-1f3fb-200d-2695-fe0f',
    title: 'man health worker: light skin tone'
  },
  {
    id: 732,
    code: '1f468-1f3fc-200d-2695-fe0f',
    title: 'man health worker: medium-light skin tone'
  },
  {
    id: 733,
    code: '1f468-1f3fd-200d-2695-fe0f',
    title: 'man health worker: medium skin tone'
  },
  {
    id: 734,
    code: '1f468-1f3fe-200d-2695-fe0f',
    title: 'man health worker: medium-dark skin tone'
  },
  {
    id: 735,
    code: '1f468-1f3ff-200d-2695-fe0f',
    title: 'man health worker: dark skin tone'
  },
  { id: 736, code: '1f469-200d-2695-fe0f', title: 'woman health worker' },
  {
    id: 737,
    code: '1f469-1f3fb-200d-2695-fe0f',
    title: 'woman health worker: light skin tone'
  },
  {
    id: 738,
    code: '1f469-1f3fc-200d-2695-fe0f',
    title: 'woman health worker: medium-light skin tone'
  },
  {
    id: 739,
    code: '1f469-1f3fd-200d-2695-fe0f',
    title: 'woman health worker: medium skin tone'
  },
  {
    id: 740,
    code: '1f469-1f3fe-200d-2695-fe0f',
    title: 'woman health worker: medium-dark skin tone'
  },
  {
    id: 741,
    code: '1f469-1f3ff-200d-2695-fe0f',
    title: 'woman health worker: dark skin tone'
  },
  { id: 742, code: '1f9d1-200d-1f393', title: 'student' },
  {
    id: 743,
    code: '1f9d1-1f3fb-200d-1f393',
    title: 'student: light skin tone'
  },
  {
    id: 744,
    code: '1f9d1-1f3fc-200d-1f393',
    title: 'student: medium-light skin tone'
  },
  {
    id: 745,
    code: '1f9d1-1f3fd-200d-1f393',
    title: 'student: medium skin tone'
  },
  {
    id: 746,
    code: '1f9d1-1f3fe-200d-1f393',
    title: 'student: medium-dark skin tone'
  },
  { id: 747, code: '1f9d1-1f3ff-200d-1f393', title: 'student: dark skin tone' },
  { id: 748, code: '1f468-200d-1f393', title: 'man student' },
  {
    id: 749,
    code: '1f468-1f3fb-200d-1f393',
    title: 'man student: light skin tone'
  },
  {
    id: 750,
    code: '1f468-1f3fc-200d-1f393',
    title: 'man student: medium-light skin tone'
  },
  {
    id: 751,
    code: '1f468-1f3fd-200d-1f393',
    title: 'man student: medium skin tone'
  },
  {
    id: 752,
    code: '1f468-1f3fe-200d-1f393',
    title: 'man student: medium-dark skin tone'
  },
  {
    id: 753,
    code: '1f468-1f3ff-200d-1f393',
    title: 'man student: dark skin tone'
  },
  { id: 754, code: '1f469-200d-1f393', title: 'woman student' },
  {
    id: 755,
    code: '1f469-1f3fb-200d-1f393',
    title: 'woman student: light skin tone'
  },
  {
    id: 756,
    code: '1f469-1f3fc-200d-1f393',
    title: 'woman student: medium-light skin tone'
  },
  {
    id: 757,
    code: '1f469-1f3fd-200d-1f393',
    title: 'woman student: medium skin tone'
  },
  {
    id: 758,
    code: '1f469-1f3fe-200d-1f393',
    title: 'woman student: medium-dark skin tone'
  },
  {
    id: 759,
    code: '1f469-1f3ff-200d-1f393',
    title: 'woman student: dark skin tone'
  },
  { id: 760, code: '1f9d1-200d-1f3eb', title: 'teacher' },
  {
    id: 761,
    code: '1f9d1-1f3fb-200d-1f3eb',
    title: 'teacher: light skin tone'
  },
  {
    id: 762,
    code: '1f9d1-1f3fc-200d-1f3eb',
    title: 'teacher: medium-light skin tone'
  },
  {
    id: 763,
    code: '1f9d1-1f3fd-200d-1f3eb',
    title: 'teacher: medium skin tone'
  },
  {
    id: 764,
    code: '1f9d1-1f3fe-200d-1f3eb',
    title: 'teacher: medium-dark skin tone'
  },
  { id: 765, code: '1f9d1-1f3ff-200d-1f3eb', title: 'teacher: dark skin tone' },
  { id: 766, code: '1f468-200d-1f3eb', title: 'man teacher' },
  {
    id: 767,
    code: '1f468-1f3fb-200d-1f3eb',
    title: 'man teacher: light skin tone'
  },
  {
    id: 768,
    code: '1f468-1f3fc-200d-1f3eb',
    title: 'man teacher: medium-light skin tone'
  },
  {
    id: 769,
    code: '1f468-1f3fd-200d-1f3eb',
    title: 'man teacher: medium skin tone'
  },
  {
    id: 770,
    code: '1f468-1f3fe-200d-1f3eb',
    title: 'man teacher: medium-dark skin tone'
  },
  {
    id: 771,
    code: '1f468-1f3ff-200d-1f3eb',
    title: 'man teacher: dark skin tone'
  },
  { id: 772, code: '1f469-200d-1f3eb', title: 'woman teacher' },
  {
    id: 773,
    code: '1f469-1f3fb-200d-1f3eb',
    title: 'woman teacher: light skin tone'
  },
  {
    id: 774,
    code: '1f469-1f3fc-200d-1f3eb',
    title: 'woman teacher: medium-light skin tone'
  },
  {
    id: 775,
    code: '1f469-1f3fd-200d-1f3eb',
    title: 'woman teacher: medium skin tone'
  },
  {
    id: 776,
    code: '1f469-1f3fe-200d-1f3eb',
    title: 'woman teacher: medium-dark skin tone'
  },
  {
    id: 777,
    code: '1f469-1f3ff-200d-1f3eb',
    title: 'woman teacher: dark skin tone'
  },
  { id: 778, code: '1f9d1-200d-2696-fe0f', title: 'judge' },
  {
    id: 779,
    code: '1f9d1-1f3fb-200d-2696-fe0f',
    title: 'judge: light skin tone'
  },
  {
    id: 780,
    code: '1f9d1-1f3fc-200d-2696-fe0f',
    title: 'judge: medium-light skin tone'
  },
  {
    id: 781,
    code: '1f9d1-1f3fd-200d-2696-fe0f',
    title: 'judge: medium skin tone'
  },
  {
    id: 782,
    code: '1f9d1-1f3fe-200d-2696-fe0f',
    title: 'judge: medium-dark skin tone'
  },
  {
    id: 783,
    code: '1f9d1-1f3ff-200d-2696-fe0f',
    title: 'judge: dark skin tone'
  },
  { id: 784, code: '1f468-200d-2696-fe0f', title: 'man judge' },
  {
    id: 785,
    code: '1f468-1f3fb-200d-2696-fe0f',
    title: 'man judge: light skin tone'
  },
  {
    id: 786,
    code: '1f468-1f3fc-200d-2696-fe0f',
    title: 'man judge: medium-light skin tone'
  },
  {
    id: 787,
    code: '1f468-1f3fd-200d-2696-fe0f',
    title: 'man judge: medium skin tone'
  },
  {
    id: 788,
    code: '1f468-1f3fe-200d-2696-fe0f',
    title: 'man judge: medium-dark skin tone'
  },
  {
    id: 789,
    code: '1f468-1f3ff-200d-2696-fe0f',
    title: 'man judge: dark skin tone'
  },
  { id: 790, code: '1f469-200d-2696-fe0f', title: 'woman judge' },
  {
    id: 791,
    code: '1f469-1f3fb-200d-2696-fe0f',
    title: 'woman judge: light skin tone'
  },
  {
    id: 792,
    code: '1f469-1f3fc-200d-2696-fe0f',
    title: 'woman judge: medium-light skin tone'
  },
  {
    id: 793,
    code: '1f469-1f3fd-200d-2696-fe0f',
    title: 'woman judge: medium skin tone'
  },
  {
    id: 794,
    code: '1f469-1f3fe-200d-2696-fe0f',
    title: 'woman judge: medium-dark skin tone'
  },
  {
    id: 795,
    code: '1f469-1f3ff-200d-2696-fe0f',
    title: 'woman judge: dark skin tone'
  },
  { id: 796, code: '1f9d1-200d-1f33e', title: 'farmer' },
  { id: 797, code: '1f9d1-1f3fb-200d-1f33e', title: 'farmer: light skin tone' },
  {
    id: 798,
    code: '1f9d1-1f3fc-200d-1f33e',
    title: 'farmer: medium-light skin tone'
  },
  {
    id: 799,
    code: '1f9d1-1f3fd-200d-1f33e',
    title: 'farmer: medium skin tone'
  },
  {
    id: 800,
    code: '1f9d1-1f3fe-200d-1f33e',
    title: 'farmer: medium-dark skin tone'
  },
  { id: 801, code: '1f9d1-1f3ff-200d-1f33e', title: 'farmer: dark skin tone' },
  { id: 802, code: '1f468-200d-1f33e', title: 'man farmer' },
  {
    id: 803,
    code: '1f468-1f3fb-200d-1f33e',
    title: 'man farmer: light skin tone'
  },
  {
    id: 804,
    code: '1f468-1f3fc-200d-1f33e',
    title: 'man farmer: medium-light skin tone'
  },
  {
    id: 805,
    code: '1f468-1f3fd-200d-1f33e',
    title: 'man farmer: medium skin tone'
  },
  {
    id: 806,
    code: '1f468-1f3fe-200d-1f33e',
    title: 'man farmer: medium-dark skin tone'
  },
  {
    id: 807,
    code: '1f468-1f3ff-200d-1f33e',
    title: 'man farmer: dark skin tone'
  },
  { id: 808, code: '1f469-200d-1f33e', title: 'woman farmer' },
  {
    id: 809,
    code: '1f469-1f3fb-200d-1f33e',
    title: 'woman farmer: light skin tone'
  },
  {
    id: 810,
    code: '1f469-1f3fc-200d-1f33e',
    title: 'woman farmer: medium-light skin tone'
  },
  {
    id: 811,
    code: '1f469-1f3fd-200d-1f33e',
    title: 'woman farmer: medium skin tone'
  },
  {
    id: 812,
    code: '1f469-1f3fe-200d-1f33e',
    title: 'woman farmer: medium-dark skin tone'
  },
  {
    id: 813,
    code: '1f469-1f3ff-200d-1f33e',
    title: 'woman farmer: dark skin tone'
  },
  { id: 814, code: '1f9d1-200d-1f373', title: 'cook' },
  { id: 815, code: '1f9d1-1f3fb-200d-1f373', title: 'cook: light skin tone' },
  {
    id: 816,
    code: '1f9d1-1f3fc-200d-1f373',
    title: 'cook: medium-light skin tone'
  },
  { id: 817, code: '1f9d1-1f3fd-200d-1f373', title: 'cook: medium skin tone' },
  {
    id: 818,
    code: '1f9d1-1f3fe-200d-1f373',
    title: 'cook: medium-dark skin tone'
  },
  { id: 819, code: '1f9d1-1f3ff-200d-1f373', title: 'cook: dark skin tone' },
  { id: 820, code: '1f468-200d-1f373', title: 'man cook' },
  {
    id: 821,
    code: '1f468-1f3fb-200d-1f373',
    title: 'man cook: light skin tone'
  },
  {
    id: 822,
    code: '1f468-1f3fc-200d-1f373',
    title: 'man cook: medium-light skin tone'
  },
  {
    id: 823,
    code: '1f468-1f3fd-200d-1f373',
    title: 'man cook: medium skin tone'
  },
  {
    id: 824,
    code: '1f468-1f3fe-200d-1f373',
    title: 'man cook: medium-dark skin tone'
  },
  {
    id: 825,
    code: '1f468-1f3ff-200d-1f373',
    title: 'man cook: dark skin tone'
  },
  { id: 826, code: '1f469-200d-1f373', title: 'woman cook' },
  {
    id: 827,
    code: '1f469-1f3fb-200d-1f373',
    title: 'woman cook: light skin tone'
  },
  {
    id: 828,
    code: '1f469-1f3fc-200d-1f373',
    title: 'woman cook: medium-light skin tone'
  },
  {
    id: 829,
    code: '1f469-1f3fd-200d-1f373',
    title: 'woman cook: medium skin tone'
  },
  {
    id: 830,
    code: '1f469-1f3fe-200d-1f373',
    title: 'woman cook: medium-dark skin tone'
  },
  {
    id: 831,
    code: '1f469-1f3ff-200d-1f373',
    title: 'woman cook: dark skin tone'
  },
  { id: 832, code: '1f9d1-200d-1f527', title: 'mechanic' },
  {
    id: 833,
    code: '1f9d1-1f3fb-200d-1f527',
    title: 'mechanic: light skin tone'
  },
  {
    id: 834,
    code: '1f9d1-1f3fc-200d-1f527',
    title: 'mechanic: medium-light skin tone'
  },
  {
    id: 835,
    code: '1f9d1-1f3fd-200d-1f527',
    title: 'mechanic: medium skin tone'
  },
  {
    id: 836,
    code: '1f9d1-1f3fe-200d-1f527',
    title: 'mechanic: medium-dark skin tone'
  },
  {
    id: 837,
    code: '1f9d1-1f3ff-200d-1f527',
    title: 'mechanic: dark skin tone'
  },
  { id: 838, code: '1f468-200d-1f527', title: 'man mechanic' },
  {
    id: 839,
    code: '1f468-1f3fb-200d-1f527',
    title: 'man mechanic: light skin tone'
  },
  {
    id: 840,
    code: '1f468-1f3fc-200d-1f527',
    title: 'man mechanic: medium-light skin tone'
  },
  {
    id: 841,
    code: '1f468-1f3fd-200d-1f527',
    title: 'man mechanic: medium skin tone'
  },
  {
    id: 842,
    code: '1f468-1f3fe-200d-1f527',
    title: 'man mechanic: medium-dark skin tone'
  },
  {
    id: 843,
    code: '1f468-1f3ff-200d-1f527',
    title: 'man mechanic: dark skin tone'
  },
  { id: 844, code: '1f469-200d-1f527', title: 'woman mechanic' },
  {
    id: 845,
    code: '1f469-1f3fb-200d-1f527',
    title: 'woman mechanic: light skin tone'
  },
  {
    id: 846,
    code: '1f469-1f3fc-200d-1f527',
    title: 'woman mechanic: medium-light skin tone'
  },
  {
    id: 847,
    code: '1f469-1f3fd-200d-1f527',
    title: 'woman mechanic: medium skin tone'
  },
  {
    id: 848,
    code: '1f469-1f3fe-200d-1f527',
    title: 'woman mechanic: medium-dark skin tone'
  },
  {
    id: 849,
    code: '1f469-1f3ff-200d-1f527',
    title: 'woman mechanic: dark skin tone'
  },
  { id: 850, code: '1f9d1-200d-1f3ed', title: 'factory worker' },
  {
    id: 851,
    code: '1f9d1-1f3fb-200d-1f3ed',
    title: 'factory worker: light skin tone'
  },
  {
    id: 852,
    code: '1f9d1-1f3fc-200d-1f3ed',
    title: 'factory worker: medium-light skin tone'
  },
  {
    id: 853,
    code: '1f9d1-1f3fd-200d-1f3ed',
    title: 'factory worker: medium skin tone'
  },
  {
    id: 854,
    code: '1f9d1-1f3fe-200d-1f3ed',
    title: 'factory worker: medium-dark skin tone'
  },
  {
    id: 855,
    code: '1f9d1-1f3ff-200d-1f3ed',
    title: 'factory worker: dark skin tone'
  },
  { id: 856, code: '1f468-200d-1f3ed', title: 'man factory worker' },
  {
    id: 857,
    code: '1f468-1f3fb-200d-1f3ed',
    title: 'man factory worker: light skin tone'
  },
  {
    id: 858,
    code: '1f468-1f3fc-200d-1f3ed',
    title: 'man factory worker: medium-light skin tone'
  },
  {
    id: 859,
    code: '1f468-1f3fd-200d-1f3ed',
    title: 'man factory worker: medium skin tone'
  },
  {
    id: 860,
    code: '1f468-1f3fe-200d-1f3ed',
    title: 'man factory worker: medium-dark skin tone'
  },
  {
    id: 861,
    code: '1f468-1f3ff-200d-1f3ed',
    title: 'man factory worker: dark skin tone'
  },
  { id: 862, code: '1f469-200d-1f3ed', title: 'woman factory worker' },
  {
    id: 863,
    code: '1f469-1f3fb-200d-1f3ed',
    title: 'woman factory worker: light skin tone'
  },
  {
    id: 864,
    code: '1f469-1f3fc-200d-1f3ed',
    title: 'woman factory worker: medium-light skin tone'
  },
  {
    id: 865,
    code: '1f469-1f3fd-200d-1f3ed',
    title: 'woman factory worker: medium skin tone'
  },
  {
    id: 866,
    code: '1f469-1f3fe-200d-1f3ed',
    title: 'woman factory worker: medium-dark skin tone'
  },
  {
    id: 867,
    code: '1f469-1f3ff-200d-1f3ed',
    title: 'woman factory worker: dark skin tone'
  },
  { id: 868, code: '1f9d1-200d-1f4bc', title: 'office worker' },
  {
    id: 869,
    code: '1f9d1-1f3fb-200d-1f4bc',
    title: 'office worker: light skin tone'
  },
  {
    id: 870,
    code: '1f9d1-1f3fc-200d-1f4bc',
    title: 'office worker: medium-light skin tone'
  },
  {
    id: 871,
    code: '1f9d1-1f3fd-200d-1f4bc',
    title: 'office worker: medium skin tone'
  },
  {
    id: 872,
    code: '1f9d1-1f3fe-200d-1f4bc',
    title: 'office worker: medium-dark skin tone'
  },
  {
    id: 873,
    code: '1f9d1-1f3ff-200d-1f4bc',
    title: 'office worker: dark skin tone'
  },
  { id: 874, code: '1f468-200d-1f4bc', title: 'man office worker' },
  {
    id: 875,
    code: '1f468-1f3fb-200d-1f4bc',
    title: 'man office worker: light skin tone'
  },
  {
    id: 876,
    code: '1f468-1f3fc-200d-1f4bc',
    title: 'man office worker: medium-light skin tone'
  },
  {
    id: 877,
    code: '1f468-1f3fd-200d-1f4bc',
    title: 'man office worker: medium skin tone'
  },
  {
    id: 878,
    code: '1f468-1f3fe-200d-1f4bc',
    title: 'man office worker: medium-dark skin tone'
  },
  {
    id: 879,
    code: '1f468-1f3ff-200d-1f4bc',
    title: 'man office worker: dark skin tone'
  },
  { id: 880, code: '1f469-200d-1f4bc', title: 'woman office worker' },
  {
    id: 881,
    code: '1f469-1f3fb-200d-1f4bc',
    title: 'woman office worker: light skin tone'
  },
  {
    id: 882,
    code: '1f469-1f3fc-200d-1f4bc',
    title: 'woman office worker: medium-light skin tone'
  },
  {
    id: 883,
    code: '1f469-1f3fd-200d-1f4bc',
    title: 'woman office worker: medium skin tone'
  },
  {
    id: 884,
    code: '1f469-1f3fe-200d-1f4bc',
    title: 'woman office worker: medium-dark skin tone'
  },
  {
    id: 885,
    code: '1f469-1f3ff-200d-1f4bc',
    title: 'woman office worker: dark skin tone'
  },
  { id: 886, code: '1f9d1-200d-1f52c', title: 'scientist' },
  {
    id: 887,
    code: '1f9d1-1f3fb-200d-1f52c',
    title: 'scientist: light skin tone'
  },
  {
    id: 888,
    code: '1f9d1-1f3fc-200d-1f52c',
    title: 'scientist: medium-light skin tone'
  },
  {
    id: 889,
    code: '1f9d1-1f3fd-200d-1f52c',
    title: 'scientist: medium skin tone'
  },
  {
    id: 890,
    code: '1f9d1-1f3fe-200d-1f52c',
    title: 'scientist: medium-dark skin tone'
  },
  {
    id: 891,
    code: '1f9d1-1f3ff-200d-1f52c',
    title: 'scientist: dark skin tone'
  },
  { id: 892, code: '1f468-200d-1f52c', title: 'man scientist' },
  {
    id: 893,
    code: '1f468-1f3fb-200d-1f52c',
    title: 'man scientist: light skin tone'
  },
  {
    id: 894,
    code: '1f468-1f3fc-200d-1f52c',
    title: 'man scientist: medium-light skin tone'
  },
  {
    id: 895,
    code: '1f468-1f3fd-200d-1f52c',
    title: 'man scientist: medium skin tone'
  },
  {
    id: 896,
    code: '1f468-1f3fe-200d-1f52c',
    title: 'man scientist: medium-dark skin tone'
  },
  {
    id: 897,
    code: '1f468-1f3ff-200d-1f52c',
    title: 'man scientist: dark skin tone'
  },
  { id: 898, code: '1f469-200d-1f52c', title: 'woman scientist' },
  {
    id: 899,
    code: '1f469-1f3fb-200d-1f52c',
    title: 'woman scientist: light skin tone'
  },
  {
    id: 900,
    code: '1f469-1f3fc-200d-1f52c',
    title: 'woman scientist: medium-light skin tone'
  },
  {
    id: 901,
    code: '1f469-1f3fd-200d-1f52c',
    title: 'woman scientist: medium skin tone'
  },
  {
    id: 902,
    code: '1f469-1f3fe-200d-1f52c',
    title: 'woman scientist: medium-dark skin tone'
  },
  {
    id: 903,
    code: '1f469-1f3ff-200d-1f52c',
    title: 'woman scientist: dark skin tone'
  },
  { id: 904, code: '1f9d1-200d-1f4bb', title: 'technologist' },
  {
    id: 905,
    code: '1f9d1-1f3fb-200d-1f4bb',
    title: 'technologist: light skin tone'
  },
  {
    id: 906,
    code: '1f9d1-1f3fc-200d-1f4bb',
    title: 'technologist: medium-light skin tone'
  },
  {
    id: 907,
    code: '1f9d1-1f3fd-200d-1f4bb',
    title: 'technologist: medium skin tone'
  },
  {
    id: 908,
    code: '1f9d1-1f3fe-200d-1f4bb',
    title: 'technologist: medium-dark skin tone'
  },
  {
    id: 909,
    code: '1f9d1-1f3ff-200d-1f4bb',
    title: 'technologist: dark skin tone'
  },
  { id: 910, code: '1f468-200d-1f4bb', title: 'man technologist' },
  {
    id: 911,
    code: '1f468-1f3fb-200d-1f4bb',
    title: 'man technologist: light skin tone'
  },
  {
    id: 912,
    code: '1f468-1f3fc-200d-1f4bb',
    title: 'man technologist: medium-light skin tone'
  },
  {
    id: 913,
    code: '1f468-1f3fd-200d-1f4bb',
    title: 'man technologist: medium skin tone'
  },
  {
    id: 914,
    code: '1f468-1f3fe-200d-1f4bb',
    title: 'man technologist: medium-dark skin tone'
  },
  {
    id: 915,
    code: '1f468-1f3ff-200d-1f4bb',
    title: 'man technologist: dark skin tone'
  },
  { id: 916, code: '1f469-200d-1f4bb', title: 'woman technologist' },
  {
    id: 917,
    code: '1f469-1f3fb-200d-1f4bb',
    title: 'woman technologist: light skin tone'
  },
  {
    id: 918,
    code: '1f469-1f3fc-200d-1f4bb',
    title: 'woman technologist: medium-light skin tone'
  },
  {
    id: 919,
    code: '1f469-1f3fd-200d-1f4bb',
    title: 'woman technologist: medium skin tone'
  },
  {
    id: 920,
    code: '1f469-1f3fe-200d-1f4bb',
    title: 'woman technologist: medium-dark skin tone'
  },
  {
    id: 921,
    code: '1f469-1f3ff-200d-1f4bb',
    title: 'woman technologist: dark skin tone'
  },
  { id: 922, code: '1f9d1-200d-1f3a4', title: 'singer' },
  { id: 923, code: '1f9d1-1f3fb-200d-1f3a4', title: 'singer: light skin tone' },
  {
    id: 924,
    code: '1f9d1-1f3fc-200d-1f3a4',
    title: 'singer: medium-light skin tone'
  },
  {
    id: 925,
    code: '1f9d1-1f3fd-200d-1f3a4',
    title: 'singer: medium skin tone'
  },
  {
    id: 926,
    code: '1f9d1-1f3fe-200d-1f3a4',
    title: 'singer: medium-dark skin tone'
  },
  { id: 927, code: '1f9d1-1f3ff-200d-1f3a4', title: 'singer: dark skin tone' },
  { id: 928, code: '1f468-200d-1f3a4', title: 'man singer' },
  {
    id: 929,
    code: '1f468-1f3fb-200d-1f3a4',
    title: 'man singer: light skin tone'
  },
  {
    id: 930,
    code: '1f468-1f3fc-200d-1f3a4',
    title: 'man singer: medium-light skin tone'
  },
  {
    id: 931,
    code: '1f468-1f3fd-200d-1f3a4',
    title: 'man singer: medium skin tone'
  },
  {
    id: 932,
    code: '1f468-1f3fe-200d-1f3a4',
    title: 'man singer: medium-dark skin tone'
  },
  {
    id: 933,
    code: '1f468-1f3ff-200d-1f3a4',
    title: 'man singer: dark skin tone'
  },
  { id: 934, code: '1f469-200d-1f3a4', title: 'woman singer' },
  {
    id: 935,
    code: '1f469-1f3fb-200d-1f3a4',
    title: 'woman singer: light skin tone'
  },
  {
    id: 936,
    code: '1f469-1f3fc-200d-1f3a4',
    title: 'woman singer: medium-light skin tone'
  },
  {
    id: 937,
    code: '1f469-1f3fd-200d-1f3a4',
    title: 'woman singer: medium skin tone'
  },
  {
    id: 938,
    code: '1f469-1f3fe-200d-1f3a4',
    title: 'woman singer: medium-dark skin tone'
  },
  {
    id: 939,
    code: '1f469-1f3ff-200d-1f3a4',
    title: 'woman singer: dark skin tone'
  },
  { id: 940, code: '1f9d1-200d-1f3a8', title: 'artist' },
  { id: 941, code: '1f9d1-1f3fb-200d-1f3a8', title: 'artist: light skin tone' },
  {
    id: 942,
    code: '1f9d1-1f3fc-200d-1f3a8',
    title: 'artist: medium-light skin tone'
  },
  {
    id: 943,
    code: '1f9d1-1f3fd-200d-1f3a8',
    title: 'artist: medium skin tone'
  },
  {
    id: 944,
    code: '1f9d1-1f3fe-200d-1f3a8',
    title: 'artist: medium-dark skin tone'
  },
  { id: 945, code: '1f9d1-1f3ff-200d-1f3a8', title: 'artist: dark skin tone' },
  { id: 946, code: '1f468-200d-1f3a8', title: 'man artist' },
  {
    id: 947,
    code: '1f468-1f3fb-200d-1f3a8',
    title: 'man artist: light skin tone'
  },
  {
    id: 948,
    code: '1f468-1f3fc-200d-1f3a8',
    title: 'man artist: medium-light skin tone'
  },
  {
    id: 949,
    code: '1f468-1f3fd-200d-1f3a8',
    title: 'man artist: medium skin tone'
  },
  {
    id: 950,
    code: '1f468-1f3fe-200d-1f3a8',
    title: 'man artist: medium-dark skin tone'
  },
  {
    id: 951,
    code: '1f468-1f3ff-200d-1f3a8',
    title: 'man artist: dark skin tone'
  },
  { id: 952, code: '1f469-200d-1f3a8', title: 'woman artist' },
  {
    id: 953,
    code: '1f469-1f3fb-200d-1f3a8',
    title: 'woman artist: light skin tone'
  },
  {
    id: 954,
    code: '1f469-1f3fc-200d-1f3a8',
    title: 'woman artist: medium-light skin tone'
  },
  {
    id: 955,
    code: '1f469-1f3fd-200d-1f3a8',
    title: 'woman artist: medium skin tone'
  },
  {
    id: 956,
    code: '1f469-1f3fe-200d-1f3a8',
    title: 'woman artist: medium-dark skin tone'
  },
  {
    id: 957,
    code: '1f469-1f3ff-200d-1f3a8',
    title: 'woman artist: dark skin tone'
  },
  { id: 958, code: '1f9d1-200d-2708-fe0f', title: 'pilot' },
  {
    id: 959,
    code: '1f9d1-1f3fb-200d-2708-fe0f',
    title: 'pilot: light skin tone'
  },
  {
    id: 960,
    code: '1f9d1-1f3fc-200d-2708-fe0f',
    title: 'pilot: medium-light skin tone'
  },
  {
    id: 961,
    code: '1f9d1-1f3fd-200d-2708-fe0f',
    title: 'pilot: medium skin tone'
  },
  {
    id: 962,
    code: '1f9d1-1f3fe-200d-2708-fe0f',
    title: 'pilot: medium-dark skin tone'
  },
  {
    id: 963,
    code: '1f9d1-1f3ff-200d-2708-fe0f',
    title: 'pilot: dark skin tone'
  },
  { id: 964, code: '1f468-200d-2708-fe0f', title: 'man pilot' },
  {
    id: 965,
    code: '1f468-1f3fb-200d-2708-fe0f',
    title: 'man pilot: light skin tone'
  },
  {
    id: 966,
    code: '1f468-1f3fc-200d-2708-fe0f',
    title: 'man pilot: medium-light skin tone'
  },
  {
    id: 967,
    code: '1f468-1f3fd-200d-2708-fe0f',
    title: 'man pilot: medium skin tone'
  },
  {
    id: 968,
    code: '1f468-1f3fe-200d-2708-fe0f',
    title: 'man pilot: medium-dark skin tone'
  },
  {
    id: 969,
    code: '1f468-1f3ff-200d-2708-fe0f',
    title: 'man pilot: dark skin tone'
  },
  { id: 970, code: '1f469-200d-2708-fe0f', title: 'woman pilot' },
  {
    id: 971,
    code: '1f469-1f3fb-200d-2708-fe0f',
    title: 'woman pilot: light skin tone'
  },
  {
    id: 972,
    code: '1f469-1f3fc-200d-2708-fe0f',
    title: 'woman pilot: medium-light skin tone'
  },
  {
    id: 973,
    code: '1f469-1f3fd-200d-2708-fe0f',
    title: 'woman pilot: medium skin tone'
  },
  {
    id: 974,
    code: '1f469-1f3fe-200d-2708-fe0f',
    title: 'woman pilot: medium-dark skin tone'
  },
  {
    id: 975,
    code: '1f469-1f3ff-200d-2708-fe0f',
    title: 'woman pilot: dark skin tone'
  },
  { id: 976, code: '1f9d1-200d-1f680', title: 'astronaut' },
  {
    id: 977,
    code: '1f9d1-1f3fb-200d-1f680',
    title: 'astronaut: light skin tone'
  },
  {
    id: 978,
    code: '1f9d1-1f3fc-200d-1f680',
    title: 'astronaut: medium-light skin tone'
  },
  {
    id: 979,
    code: '1f9d1-1f3fd-200d-1f680',
    title: 'astronaut: medium skin tone'
  },
  {
    id: 980,
    code: '1f9d1-1f3fe-200d-1f680',
    title: 'astronaut: medium-dark skin tone'
  },
  {
    id: 981,
    code: '1f9d1-1f3ff-200d-1f680',
    title: 'astronaut: dark skin tone'
  },
  { id: 982, code: '1f468-200d-1f680', title: 'man astronaut' },
  {
    id: 983,
    code: '1f468-1f3fb-200d-1f680',
    title: 'man astronaut: light skin tone'
  },
  {
    id: 984,
    code: '1f468-1f3fc-200d-1f680',
    title: 'man astronaut: medium-light skin tone'
  },
  {
    id: 985,
    code: '1f468-1f3fd-200d-1f680',
    title: 'man astronaut: medium skin tone'
  },
  {
    id: 986,
    code: '1f468-1f3fe-200d-1f680',
    title: 'man astronaut: medium-dark skin tone'
  },
  {
    id: 987,
    code: '1f468-1f3ff-200d-1f680',
    title: 'man astronaut: dark skin tone'
  },
  { id: 988, code: '1f469-200d-1f680', title: 'woman astronaut' },
  {
    id: 989,
    code: '1f469-1f3fb-200d-1f680',
    title: 'woman astronaut: light skin tone'
  },
  {
    id: 990,
    code: '1f469-1f3fc-200d-1f680',
    title: 'woman astronaut: medium-light skin tone'
  },
  {
    id: 991,
    code: '1f469-1f3fd-200d-1f680',
    title: 'woman astronaut: medium skin tone'
  },
  {
    id: 992,
    code: '1f469-1f3fe-200d-1f680',
    title: 'woman astronaut: medium-dark skin tone'
  },
  {
    id: 993,
    code: '1f469-1f3ff-200d-1f680',
    title: 'woman astronaut: dark skin tone'
  },
  { id: 994, code: '1f9d1-200d-1f692', title: 'firefighter' },
  {
    id: 995,
    code: '1f9d1-1f3fb-200d-1f692',
    title: 'firefighter: light skin tone'
  },
  {
    id: 996,
    code: '1f9d1-1f3fc-200d-1f692',
    title: 'firefighter: medium-light skin tone'
  },
  {
    id: 997,
    code: '1f9d1-1f3fd-200d-1f692',
    title: 'firefighter: medium skin tone'
  },
  {
    id: 998,
    code: '1f9d1-1f3fe-200d-1f692',
    title: 'firefighter: medium-dark skin tone'
  },
  {
    id: 999,
    code: '1f9d1-1f3ff-200d-1f692',
    title: 'firefighter: dark skin tone'
  },
  { id: 1000, code: '1f468-200d-1f692', title: 'man firefighter' },
  {
    id: 1001,
    code: '1f468-1f3fb-200d-1f692',
    title: 'man firefighter: light skin tone'
  },
  {
    id: 1002,
    code: '1f468-1f3fc-200d-1f692',
    title: 'man firefighter: medium-light skin tone'
  },
  {
    id: 1003,
    code: '1f468-1f3fd-200d-1f692',
    title: 'man firefighter: medium skin tone'
  },
  {
    id: 1004,
    code: '1f468-1f3fe-200d-1f692',
    title: 'man firefighter: medium-dark skin tone'
  },
  {
    id: 1005,
    code: '1f468-1f3ff-200d-1f692',
    title: 'man firefighter: dark skin tone'
  },
  { id: 1006, code: '1f469-200d-1f692', title: 'woman firefighter' },
  {
    id: 1007,
    code: '1f469-1f3fb-200d-1f692',
    title: 'woman firefighter: light skin tone'
  },
  {
    id: 1008,
    code: '1f469-1f3fc-200d-1f692',
    title: 'woman firefighter: medium-light skin tone'
  },
  {
    id: 1009,
    code: '1f469-1f3fd-200d-1f692',
    title: 'woman firefighter: medium skin tone'
  },
  {
    id: 1010,
    code: '1f469-1f3fe-200d-1f692',
    title: 'woman firefighter: medium-dark skin tone'
  },
  {
    id: 1011,
    code: '1f469-1f3ff-200d-1f692',
    title: 'woman firefighter: dark skin tone'
  },
  { id: 1012, code: '1f46e', title: 'police officer' },
  { id: 1013, code: '1f46e-1f3fb', title: 'police officer: light skin tone' },
  {
    id: 1014,
    code: '1f46e-1f3fc',
    title: 'police officer: medium-light skin tone'
  },
  { id: 1015, code: '1f46e-1f3fd', title: 'police officer: medium skin tone' },
  {
    id: 1016,
    code: '1f46e-1f3fe',
    title: 'police officer: medium-dark skin tone'
  },
  { id: 1017, code: '1f46e-1f3ff', title: 'police officer: dark skin tone' },
  { id: 1018, code: '1f46e-200d-2642-fe0f', title: 'man police officer' },
  {
    id: 1019,
    code: '1f46e-1f3fb-200d-2642-fe0f',
    title: 'man police officer: light skin tone'
  },
  {
    id: 1020,
    code: '1f46e-1f3fc-200d-2642-fe0f',
    title: 'man police officer: medium-light skin tone'
  },
  {
    id: 1021,
    code: '1f46e-1f3fd-200d-2642-fe0f',
    title: 'man police officer: medium skin tone'
  },
  {
    id: 1022,
    code: '1f46e-1f3fe-200d-2642-fe0f',
    title: 'man police officer: medium-dark skin tone'
  },
  {
    id: 1023,
    code: '1f46e-1f3ff-200d-2642-fe0f',
    title: 'man police officer: dark skin tone'
  },
  { id: 1024, code: '1f46e-200d-2640-fe0f', title: 'woman police officer' },
  {
    id: 1025,
    code: '1f46e-1f3fb-200d-2640-fe0f',
    title: 'woman police officer: light skin tone'
  },
  {
    id: 1026,
    code: '1f46e-1f3fc-200d-2640-fe0f',
    title: 'woman police officer: medium-light skin tone'
  },
  {
    id: 1027,
    code: '1f46e-1f3fd-200d-2640-fe0f',
    title: 'woman police officer: medium skin tone'
  },
  {
    id: 1028,
    code: '1f46e-1f3fe-200d-2640-fe0f',
    title: 'woman police officer: medium-dark skin tone'
  },
  {
    id: 1029,
    code: '1f46e-1f3ff-200d-2640-fe0f',
    title: 'woman police officer: dark skin tone'
  },
  { id: 1030, code: '1f575', title: 'detective' },
  { id: 1031, code: '1f575-1f3fb', title: 'detective: light skin tone' },
  { id: 1032, code: '1f575-1f3fc', title: 'detective: medium-light skin tone' },
  { id: 1033, code: '1f575-1f3fd', title: 'detective: medium skin tone' },
  { id: 1034, code: '1f575-1f3fe', title: 'detective: medium-dark skin tone' },
  { id: 1035, code: '1f575-1f3ff', title: 'detective: dark skin tone' },
  { id: 1036, code: '1f575-fe0f-200d-2642-fe0f', title: 'man detective' },
  {
    id: 1037,
    code: '1f575-1f3fb-200d-2642-fe0f',
    title: 'man detective: light skin tone'
  },
  {
    id: 1038,
    code: '1f575-1f3fc-200d-2642-fe0f',
    title: 'man detective: medium-light skin tone'
  },
  {
    id: 1039,
    code: '1f575-1f3fd-200d-2642-fe0f',
    title: 'man detective: medium skin tone'
  },
  {
    id: 1040,
    code: '1f575-1f3fe-200d-2642-fe0f',
    title: 'man detective: medium-dark skin tone'
  },
  {
    id: 1041,
    code: '1f575-1f3ff-200d-2642-fe0f',
    title: 'man detective: dark skin tone'
  },
  { id: 1042, code: '1f575-fe0f-200d-2640-fe0f', title: 'woman detective' },
  {
    id: 1043,
    code: '1f575-1f3fb-200d-2640-fe0f',
    title: 'woman detective: light skin tone'
  },
  {
    id: 1044,
    code: '1f575-1f3fc-200d-2640-fe0f',
    title: 'woman detective: medium-light skin tone'
  },
  {
    id: 1045,
    code: '1f575-1f3fd-200d-2640-fe0f',
    title: 'woman detective: medium skin tone'
  },
  {
    id: 1046,
    code: '1f575-1f3fe-200d-2640-fe0f',
    title: 'woman detective: medium-dark skin tone'
  },
  {
    id: 1047,
    code: '1f575-1f3ff-200d-2640-fe0f',
    title: 'woman detective: dark skin tone'
  },
  { id: 1048, code: '1f482', title: 'guard' },
  { id: 1049, code: '1f482-1f3fb', title: 'guard: light skin tone' },
  { id: 1050, code: '1f482-1f3fc', title: 'guard: medium-light skin tone' },
  { id: 1051, code: '1f482-1f3fd', title: 'guard: medium skin tone' },
  { id: 1052, code: '1f482-1f3fe', title: 'guard: medium-dark skin tone' },
  { id: 1053, code: '1f482-1f3ff', title: 'guard: dark skin tone' },
  { id: 1054, code: '1f482-200d-2642-fe0f', title: 'man guard' },
  {
    id: 1055,
    code: '1f482-1f3fb-200d-2642-fe0f',
    title: 'man guard: light skin tone'
  },
  {
    id: 1056,
    code: '1f482-1f3fc-200d-2642-fe0f',
    title: 'man guard: medium-light skin tone'
  },
  {
    id: 1057,
    code: '1f482-1f3fd-200d-2642-fe0f',
    title: 'man guard: medium skin tone'
  },
  {
    id: 1058,
    code: '1f482-1f3fe-200d-2642-fe0f',
    title: 'man guard: medium-dark skin tone'
  },
  {
    id: 1059,
    code: '1f482-1f3ff-200d-2642-fe0f',
    title: 'man guard: dark skin tone'
  },
  { id: 1060, code: '1f482-200d-2640-fe0f', title: 'woman guard' },
  {
    id: 1061,
    code: '1f482-1f3fb-200d-2640-fe0f',
    title: 'woman guard: light skin tone'
  },
  {
    id: 1062,
    code: '1f482-1f3fc-200d-2640-fe0f',
    title: 'woman guard: medium-light skin tone'
  },
  {
    id: 1063,
    code: '1f482-1f3fd-200d-2640-fe0f',
    title: 'woman guard: medium skin tone'
  },
  {
    id: 1064,
    code: '1f482-1f3fe-200d-2640-fe0f',
    title: 'woman guard: medium-dark skin tone'
  },
  {
    id: 1065,
    code: '1f482-1f3ff-200d-2640-fe0f',
    title: 'woman guard: dark skin tone'
  },
  { id: 1066, code: '1f477', title: 'construction worker' },
  {
    id: 1067,
    code: '1f477-1f3fb',
    title: 'construction worker: light skin tone'
  },
  {
    id: 1068,
    code: '1f477-1f3fc',
    title: 'construction worker: medium-light skin tone'
  },
  {
    id: 1069,
    code: '1f477-1f3fd',
    title: 'construction worker: medium skin tone'
  },
  {
    id: 1070,
    code: '1f477-1f3fe',
    title: 'construction worker: medium-dark skin tone'
  },
  {
    id: 1071,
    code: '1f477-1f3ff',
    title: 'construction worker: dark skin tone'
  },
  { id: 1072, code: '1f477-200d-2642-fe0f', title: 'man construction worker' },
  {
    id: 1073,
    code: '1f477-1f3fb-200d-2642-fe0f',
    title: 'man construction worker: light skin tone'
  },
  {
    id: 1074,
    code: '1f477-1f3fc-200d-2642-fe0f',
    title: 'man construction worker: medium-light skin tone'
  },
  {
    id: 1075,
    code: '1f477-1f3fd-200d-2642-fe0f',
    title: 'man construction worker: medium skin tone'
  },
  {
    id: 1076,
    code: '1f477-1f3fe-200d-2642-fe0f',
    title: 'man construction worker: medium-dark skin tone'
  },
  {
    id: 1077,
    code: '1f477-1f3ff-200d-2642-fe0f',
    title: 'man construction worker: dark skin tone'
  },
  {
    id: 1078,
    code: '1f477-200d-2640-fe0f',
    title: 'woman construction worker'
  },
  {
    id: 1079,
    code: '1f477-1f3fb-200d-2640-fe0f',
    title: 'woman construction worker: light skin tone'
  },
  {
    id: 1080,
    code: '1f477-1f3fc-200d-2640-fe0f',
    title: 'woman construction worker: medium-light skin tone'
  },
  {
    id: 1081,
    code: '1f477-1f3fd-200d-2640-fe0f',
    title: 'woman construction worker: medium skin tone'
  },
  {
    id: 1082,
    code: '1f477-1f3fe-200d-2640-fe0f',
    title: 'woman construction worker: medium-dark skin tone'
  },
  {
    id: 1083,
    code: '1f477-1f3ff-200d-2640-fe0f',
    title: 'woman construction worker: dark skin tone'
  },
  { id: 1084, code: '1f934', title: 'prince' },
  { id: 1085, code: '1f934-1f3fb', title: 'prince: light skin tone' },
  { id: 1086, code: '1f934-1f3fc', title: 'prince: medium-light skin tone' },
  { id: 1087, code: '1f934-1f3fd', title: 'prince: medium skin tone' },
  { id: 1088, code: '1f934-1f3fe', title: 'prince: medium-dark skin tone' },
  { id: 1089, code: '1f934-1f3ff', title: 'prince: dark skin tone' },
  { id: 1090, code: '1f478', title: 'princess' },
  { id: 1091, code: '1f478-1f3fb', title: 'princess: light skin tone' },
  { id: 1092, code: '1f478-1f3fc', title: 'princess: medium-light skin tone' },
  { id: 1093, code: '1f478-1f3fd', title: 'princess: medium skin tone' },
  { id: 1094, code: '1f478-1f3fe', title: 'princess: medium-dark skin tone' },
  { id: 1095, code: '1f478-1f3ff', title: 'princess: dark skin tone' },
  { id: 1096, code: '1f473', title: 'person wearing turban' },
  {
    id: 1097,
    code: '1f473-1f3fb',
    title: 'person wearing turban: light skin tone'
  },
  {
    id: 1098,
    code: '1f473-1f3fc',
    title: 'person wearing turban: medium-light skin tone'
  },
  {
    id: 1099,
    code: '1f473-1f3fd',
    title: 'person wearing turban: medium skin tone'
  },
  {
    id: 1100,
    code: '1f473-1f3fe',
    title: 'person wearing turban: medium-dark skin tone'
  },
  {
    id: 1101,
    code: '1f473-1f3ff',
    title: 'person wearing turban: dark skin tone'
  },
  { id: 1102, code: '1f473-200d-2642-fe0f', title: 'man wearing turban' },
  {
    id: 1103,
    code: '1f473-1f3fb-200d-2642-fe0f',
    title: 'man wearing turban: light skin tone'
  },
  {
    id: 1104,
    code: '1f473-1f3fc-200d-2642-fe0f',
    title: 'man wearing turban: medium-light skin tone'
  },
  {
    id: 1105,
    code: '1f473-1f3fd-200d-2642-fe0f',
    title: 'man wearing turban: medium skin tone'
  },
  {
    id: 1106,
    code: '1f473-1f3fe-200d-2642-fe0f',
    title: 'man wearing turban: medium-dark skin tone'
  },
  {
    id: 1107,
    code: '1f473-1f3ff-200d-2642-fe0f',
    title: 'man wearing turban: dark skin tone'
  },
  { id: 1108, code: '1f473-200d-2640-fe0f', title: 'woman wearing turban' },
  {
    id: 1109,
    code: '1f473-1f3fb-200d-2640-fe0f',
    title: 'woman wearing turban: light skin tone'
  },
  {
    id: 1110,
    code: '1f473-1f3fc-200d-2640-fe0f',
    title: 'woman wearing turban: medium-light skin tone'
  },
  {
    id: 1111,
    code: '1f473-1f3fd-200d-2640-fe0f',
    title: 'woman wearing turban: medium skin tone'
  },
  {
    id: 1112,
    code: '1f473-1f3fe-200d-2640-fe0f',
    title: 'woman wearing turban: medium-dark skin tone'
  },
  {
    id: 1113,
    code: '1f473-1f3ff-200d-2640-fe0f',
    title: 'woman wearing turban: dark skin tone'
  },
  { id: 1114, code: '1f472', title: 'person with skullcap' },
  {
    id: 1115,
    code: '1f472-1f3fb',
    title: 'person with skullcap: light skin tone'
  },
  {
    id: 1116,
    code: '1f472-1f3fc',
    title: 'person with skullcap: medium-light skin tone'
  },
  {
    id: 1117,
    code: '1f472-1f3fd',
    title: 'person with skullcap: medium skin tone'
  },
  {
    id: 1118,
    code: '1f472-1f3fe',
    title: 'person with skullcap: medium-dark skin tone'
  },
  {
    id: 1119,
    code: '1f472-1f3ff',
    title: 'person with skullcap: dark skin tone'
  },
  { id: 1120, code: '1f9d5', title: 'woman with headscarf' },
  {
    id: 1121,
    code: '1f9d5-1f3fb',
    title: 'woman with headscarf: light skin tone'
  },
  {
    id: 1122,
    code: '1f9d5-1f3fc',
    title: 'woman with headscarf: medium-light skin tone'
  },
  {
    id: 1123,
    code: '1f9d5-1f3fd',
    title: 'woman with headscarf: medium skin tone'
  },
  {
    id: 1124,
    code: '1f9d5-1f3fe',
    title: 'woman with headscarf: medium-dark skin tone'
  },
  {
    id: 1125,
    code: '1f9d5-1f3ff',
    title: 'woman with headscarf: dark skin tone'
  },
  { id: 1126, code: '1f935', title: 'person in tuxedo' },
  { id: 1127, code: '1f935-1f3fb', title: 'person in tuxedo: light skin tone' },
  {
    id: 1128,
    code: '1f935-1f3fc',
    title: 'person in tuxedo: medium-light skin tone'
  },
  {
    id: 1129,
    code: '1f935-1f3fd',
    title: 'person in tuxedo: medium skin tone'
  },
  {
    id: 1130,
    code: '1f935-1f3fe',
    title: 'person in tuxedo: medium-dark skin tone'
  },
  { id: 1131, code: '1f935-1f3ff', title: 'person in tuxedo: dark skin tone' },
  { id: 1132, code: '1f935-200d-2642-fe0f', title: 'man in tuxedo' },
  {
    id: 1133,
    code: '1f935-1f3fb-200d-2642-fe0f',
    title: 'man in tuxedo: light skin tone'
  },
  {
    id: 1134,
    code: '1f935-1f3fc-200d-2642-fe0f',
    title: 'man in tuxedo: medium-light skin tone'
  },
  {
    id: 1135,
    code: '1f935-1f3fd-200d-2642-fe0f',
    title: 'man in tuxedo: medium skin tone'
  },
  {
    id: 1136,
    code: '1f935-1f3fe-200d-2642-fe0f',
    title: 'man in tuxedo: medium-dark skin tone'
  },
  {
    id: 1137,
    code: '1f935-1f3ff-200d-2642-fe0f',
    title: 'man in tuxedo: dark skin tone'
  },
  { id: 1138, code: '1f935-200d-2640-fe0f', title: 'woman in tuxedo' },
  {
    id: 1139,
    code: '1f935-1f3fb-200d-2640-fe0f',
    title: 'woman in tuxedo: light skin tone'
  },
  {
    id: 1140,
    code: '1f935-1f3fc-200d-2640-fe0f',
    title: 'woman in tuxedo: medium-light skin tone'
  },
  {
    id: 1141,
    code: '1f935-1f3fd-200d-2640-fe0f',
    title: 'woman in tuxedo: medium skin tone'
  },
  {
    id: 1142,
    code: '1f935-1f3fe-200d-2640-fe0f',
    title: 'woman in tuxedo: medium-dark skin tone'
  },
  {
    id: 1143,
    code: '1f935-1f3ff-200d-2640-fe0f',
    title: 'woman in tuxedo: dark skin tone'
  },
  { id: 1144, code: '1f470', title: 'person with veil' },
  { id: 1145, code: '1f470-1f3fb', title: 'person with veil: light skin tone' },
  {
    id: 1146,
    code: '1f470-1f3fc',
    title: 'person with veil: medium-light skin tone'
  },
  {
    id: 1147,
    code: '1f470-1f3fd',
    title: 'person with veil: medium skin tone'
  },
  {
    id: 1148,
    code: '1f470-1f3fe',
    title: 'person with veil: medium-dark skin tone'
  },
  { id: 1149, code: '1f470-1f3ff', title: 'person with veil: dark skin tone' },
  { id: 1150, code: '1f930', title: 'pregnant woman' },
  { id: 1151, code: '1f930-1f3fb', title: 'pregnant woman: light skin tone' },
  {
    id: 1152,
    code: '1f930-1f3fc',
    title: 'pregnant woman: medium-light skin tone'
  },
  { id: 1153, code: '1f930-1f3fd', title: 'pregnant woman: medium skin tone' },
  {
    id: 1154,
    code: '1f930-1f3fe',
    title: 'pregnant woman: medium-dark skin tone'
  },
  { id: 1155, code: '1f930-1f3ff', title: 'pregnant woman: dark skin tone' },
  { id: 1156, code: '1f931', title: 'breast-feeding' },
  { id: 1157, code: '1f931-1f3fb', title: 'breast-feeding: light skin tone' },
  {
    id: 1158,
    code: '1f931-1f3fc',
    title: 'breast-feeding: medium-light skin tone'
  },
  { id: 1159, code: '1f931-1f3fd', title: 'breast-feeding: medium skin tone' },
  {
    id: 1160,
    code: '1f931-1f3fe',
    title: 'breast-feeding: medium-dark skin tone'
  },
  { id: 1161, code: '1f931-1f3ff', title: 'breast-feeding: dark skin tone' },
  { id: 1162, code: '1f47c', title: 'baby angel' },
  { id: 1163, code: '1f47c-1f3fb', title: 'baby angel: light skin tone' },
  {
    id: 1164,
    code: '1f47c-1f3fc',
    title: 'baby angel: medium-light skin tone'
  },
  { id: 1165, code: '1f47c-1f3fd', title: 'baby angel: medium skin tone' },
  { id: 1166, code: '1f47c-1f3fe', title: 'baby angel: medium-dark skin tone' },
  { id: 1167, code: '1f47c-1f3ff', title: 'baby angel: dark skin tone' },
  { id: 1168, code: '1f385', title: 'santa claus' },
  { id: 1169, code: '1f385-1f3fb', title: 'santa claus: light skin tone' },
  {
    id: 1170,
    code: '1f385-1f3fc',
    title: 'santa claus: medium-light skin tone'
  },
  { id: 1171, code: '1f385-1f3fd', title: 'santa claus: medium skin tone' },
  {
    id: 1172,
    code: '1f385-1f3fe',
    title: 'santa claus: medium-dark skin tone'
  },
  { id: 1173, code: '1f385-1f3ff', title: 'santa claus: dark skin tone' },
  { id: 1174, code: '1f936', title: 'mrs. claus' },
  { id: 1175, code: '1f936-1f3fb', title: 'mrs. claus: light skin tone' },
  {
    id: 1176,
    code: '1f936-1f3fc',
    title: 'mrs. claus: medium-light skin tone'
  },
  { id: 1177, code: '1f936-1f3fd', title: 'mrs. claus: medium skin tone' },
  { id: 1178, code: '1f936-1f3fe', title: 'mrs. claus: medium-dark skin tone' },
  { id: 1179, code: '1f936-1f3ff', title: 'mrs. claus: dark skin tone' },
  { id: 1180, code: '1f9b8', title: 'superhero' },
  { id: 1181, code: '1f9b8-1f3fb', title: 'superhero: light skin tone' },
  { id: 1182, code: '1f9b8-1f3fc', title: 'superhero: medium-light skin tone' },
  { id: 1183, code: '1f9b8-1f3fd', title: 'superhero: medium skin tone' },
  { id: 1184, code: '1f9b8-1f3fe', title: 'superhero: medium-dark skin tone' },
  { id: 1185, code: '1f9b8-1f3ff', title: 'superhero: dark skin tone' },
  { id: 1186, code: '1f9b8-200d-2642-fe0f', title: 'man superhero' },
  {
    id: 1187,
    code: '1f9b8-1f3fb-200d-2642-fe0f',
    title: 'man superhero: light skin tone'
  },
  {
    id: 1188,
    code: '1f9b8-1f3fc-200d-2642-fe0f',
    title: 'man superhero: medium-light skin tone'
  },
  {
    id: 1189,
    code: '1f9b8-1f3fd-200d-2642-fe0f',
    title: 'man superhero: medium skin tone'
  },
  {
    id: 1190,
    code: '1f9b8-1f3fe-200d-2642-fe0f',
    title: 'man superhero: medium-dark skin tone'
  },
  {
    id: 1191,
    code: '1f9b8-1f3ff-200d-2642-fe0f',
    title: 'man superhero: dark skin tone'
  },
  { id: 1192, code: '1f9b8-200d-2640-fe0f', title: 'woman superhero' },
  {
    id: 1193,
    code: '1f9b8-1f3fb-200d-2640-fe0f',
    title: 'woman superhero: light skin tone'
  },
  {
    id: 1194,
    code: '1f9b8-1f3fc-200d-2640-fe0f',
    title: 'woman superhero: medium-light skin tone'
  },
  {
    id: 1195,
    code: '1f9b8-1f3fd-200d-2640-fe0f',
    title: 'woman superhero: medium skin tone'
  },
  {
    id: 1196,
    code: '1f9b8-1f3fe-200d-2640-fe0f',
    title: 'woman superhero: medium-dark skin tone'
  },
  {
    id: 1197,
    code: '1f9b8-1f3ff-200d-2640-fe0f',
    title: 'woman superhero: dark skin tone'
  },
  { id: 1198, code: '1f9b9', title: 'supervillain' },
  { id: 1199, code: '1f9b9-1f3fb', title: 'supervillain: light skin tone' },
  {
    id: 1200,
    code: '1f9b9-1f3fc',
    title: 'supervillain: medium-light skin tone'
  },
  { id: 1201, code: '1f9b9-1f3fd', title: 'supervillain: medium skin tone' },
  {
    id: 1202,
    code: '1f9b9-1f3fe',
    title: 'supervillain: medium-dark skin tone'
  },
  { id: 1203, code: '1f9b9-1f3ff', title: 'supervillain: dark skin tone' },
  { id: 1204, code: '1f9b9-200d-2642-fe0f', title: 'man supervillain' },
  {
    id: 1205,
    code: '1f9b9-1f3fb-200d-2642-fe0f',
    title: 'man supervillain: light skin tone'
  },
  {
    id: 1206,
    code: '1f9b9-1f3fc-200d-2642-fe0f',
    title: 'man supervillain: medium-light skin tone'
  },
  {
    id: 1207,
    code: '1f9b9-1f3fd-200d-2642-fe0f',
    title: 'man supervillain: medium skin tone'
  },
  {
    id: 1208,
    code: '1f9b9-1f3fe-200d-2642-fe0f',
    title: 'man supervillain: medium-dark skin tone'
  },
  {
    id: 1209,
    code: '1f9b9-1f3ff-200d-2642-fe0f',
    title: 'man supervillain: dark skin tone'
  },
  { id: 1210, code: '1f9b9-200d-2640-fe0f', title: 'woman supervillain' },
  {
    id: 1211,
    code: '1f9b9-1f3fb-200d-2640-fe0f',
    title: 'woman supervillain: light skin tone'
  },
  {
    id: 1212,
    code: '1f9b9-1f3fc-200d-2640-fe0f',
    title: 'woman supervillain: medium-light skin tone'
  },
  {
    id: 1213,
    code: '1f9b9-1f3fd-200d-2640-fe0f',
    title: 'woman supervillain: medium skin tone'
  },
  {
    id: 1214,
    code: '1f9b9-1f3fe-200d-2640-fe0f',
    title: 'woman supervillain: medium-dark skin tone'
  },
  {
    id: 1215,
    code: '1f9b9-1f3ff-200d-2640-fe0f',
    title: 'woman supervillain: dark skin tone'
  },
  { id: 1216, code: '1f9d9', title: 'mage' },
  { id: 1217, code: '1f9d9-1f3fb', title: 'mage: light skin tone' },
  { id: 1218, code: '1f9d9-1f3fc', title: 'mage: medium-light skin tone' },
  { id: 1219, code: '1f9d9-1f3fd', title: 'mage: medium skin tone' },
  { id: 1220, code: '1f9d9-1f3fe', title: 'mage: medium-dark skin tone' },
  { id: 1221, code: '1f9d9-1f3ff', title: 'mage: dark skin tone' },
  { id: 1222, code: '1f9d9-200d-2642-fe0f', title: 'man mage' },
  {
    id: 1223,
    code: '1f9d9-1f3fb-200d-2642-fe0f',
    title: 'man mage: light skin tone'
  },
  {
    id: 1224,
    code: '1f9d9-1f3fc-200d-2642-fe0f',
    title: 'man mage: medium-light skin tone'
  },
  {
    id: 1225,
    code: '1f9d9-1f3fd-200d-2642-fe0f',
    title: 'man mage: medium skin tone'
  },
  {
    id: 1226,
    code: '1f9d9-1f3fe-200d-2642-fe0f',
    title: 'man mage: medium-dark skin tone'
  },
  {
    id: 1227,
    code: '1f9d9-1f3ff-200d-2642-fe0f',
    title: 'man mage: dark skin tone'
  },
  { id: 1228, code: '1f9d9-200d-2640-fe0f', title: 'woman mage' },
  {
    id: 1229,
    code: '1f9d9-1f3fb-200d-2640-fe0f',
    title: 'woman mage: light skin tone'
  },
  {
    id: 1230,
    code: '1f9d9-1f3fc-200d-2640-fe0f',
    title: 'woman mage: medium-light skin tone'
  },
  {
    id: 1231,
    code: '1f9d9-1f3fd-200d-2640-fe0f',
    title: 'woman mage: medium skin tone'
  },
  {
    id: 1232,
    code: '1f9d9-1f3fe-200d-2640-fe0f',
    title: 'woman mage: medium-dark skin tone'
  },
  {
    id: 1233,
    code: '1f9d9-1f3ff-200d-2640-fe0f',
    title: 'woman mage: dark skin tone'
  },
  { id: 1234, code: '1f9da', title: 'fairy' },
  { id: 1235, code: '1f9da-1f3fb', title: 'fairy: light skin tone' },
  { id: 1236, code: '1f9da-1f3fc', title: 'fairy: medium-light skin tone' },
  { id: 1237, code: '1f9da-1f3fd', title: 'fairy: medium skin tone' },
  { id: 1238, code: '1f9da-1f3fe', title: 'fairy: medium-dark skin tone' },
  { id: 1239, code: '1f9da-1f3ff', title: 'fairy: dark skin tone' },
  { id: 1240, code: '1f9da-200d-2642-fe0f', title: 'man fairy' },
  {
    id: 1241,
    code: '1f9da-1f3fb-200d-2642-fe0f',
    title: 'man fairy: light skin tone'
  },
  {
    id: 1242,
    code: '1f9da-1f3fc-200d-2642-fe0f',
    title: 'man fairy: medium-light skin tone'
  },
  {
    id: 1243,
    code: '1f9da-1f3fd-200d-2642-fe0f',
    title: 'man fairy: medium skin tone'
  },
  {
    id: 1244,
    code: '1f9da-1f3fe-200d-2642-fe0f',
    title: 'man fairy: medium-dark skin tone'
  },
  {
    id: 1245,
    code: '1f9da-1f3ff-200d-2642-fe0f',
    title: 'man fairy: dark skin tone'
  },
  { id: 1246, code: '1f9da-200d-2640-fe0f', title: 'woman fairy' },
  {
    id: 1247,
    code: '1f9da-1f3fb-200d-2640-fe0f',
    title: 'woman fairy: light skin tone'
  },
  {
    id: 1248,
    code: '1f9da-1f3fc-200d-2640-fe0f',
    title: 'woman fairy: medium-light skin tone'
  },
  {
    id: 1249,
    code: '1f9da-1f3fd-200d-2640-fe0f',
    title: 'woman fairy: medium skin tone'
  },
  {
    id: 1250,
    code: '1f9da-1f3fe-200d-2640-fe0f',
    title: 'woman fairy: medium-dark skin tone'
  },
  {
    id: 1251,
    code: '1f9da-1f3ff-200d-2640-fe0f',
    title: 'woman fairy: dark skin tone'
  },
  { id: 1252, code: '1f9db', title: 'vampire' },
  { id: 1253, code: '1f9db-1f3fb', title: 'vampire: light skin tone' },
  { id: 1254, code: '1f9db-1f3fc', title: 'vampire: medium-light skin tone' },
  { id: 1255, code: '1f9db-1f3fd', title: 'vampire: medium skin tone' },
  { id: 1256, code: '1f9db-1f3fe', title: 'vampire: medium-dark skin tone' },
  { id: 1257, code: '1f9db-1f3ff', title: 'vampire: dark skin tone' },
  { id: 1258, code: '1f9db-200d-2642-fe0f', title: 'man vampire' },
  {
    id: 1259,
    code: '1f9db-1f3fb-200d-2642-fe0f',
    title: 'man vampire: light skin tone'
  },
  {
    id: 1260,
    code: '1f9db-1f3fc-200d-2642-fe0f',
    title: 'man vampire: medium-light skin tone'
  },
  {
    id: 1261,
    code: '1f9db-1f3fd-200d-2642-fe0f',
    title: 'man vampire: medium skin tone'
  },
  {
    id: 1262,
    code: '1f9db-1f3fe-200d-2642-fe0f',
    title: 'man vampire: medium-dark skin tone'
  },
  {
    id: 1263,
    code: '1f9db-1f3ff-200d-2642-fe0f',
    title: 'man vampire: dark skin tone'
  },
  { id: 1264, code: '1f9db-200d-2640-fe0f', title: 'woman vampire' },
  {
    id: 1265,
    code: '1f9db-1f3fb-200d-2640-fe0f',
    title: 'woman vampire: light skin tone'
  },
  {
    id: 1266,
    code: '1f9db-1f3fc-200d-2640-fe0f',
    title: 'woman vampire: medium-light skin tone'
  },
  {
    id: 1267,
    code: '1f9db-1f3fd-200d-2640-fe0f',
    title: 'woman vampire: medium skin tone'
  },
  {
    id: 1268,
    code: '1f9db-1f3fe-200d-2640-fe0f',
    title: 'woman vampire: medium-dark skin tone'
  },
  {
    id: 1269,
    code: '1f9db-1f3ff-200d-2640-fe0f',
    title: 'woman vampire: dark skin tone'
  },
  { id: 1270, code: '1f9dc', title: 'merperson' },
  { id: 1271, code: '1f9dc-1f3fb', title: 'merperson: light skin tone' },
  { id: 1272, code: '1f9dc-1f3fc', title: 'merperson: medium-light skin tone' },
  { id: 1273, code: '1f9dc-1f3fd', title: 'merperson: medium skin tone' },
  { id: 1274, code: '1f9dc-1f3fe', title: 'merperson: medium-dark skin tone' },
  { id: 1275, code: '1f9dc-1f3ff', title: 'merperson: dark skin tone' },
  { id: 1276, code: '1f9dc-200d-2642-fe0f', title: 'merman' },
  {
    id: 1277,
    code: '1f9dc-1f3fb-200d-2642-fe0f',
    title: 'merman: light skin tone'
  },
  {
    id: 1278,
    code: '1f9dc-1f3fc-200d-2642-fe0f',
    title: 'merman: medium-light skin tone'
  },
  {
    id: 1279,
    code: '1f9dc-1f3fd-200d-2642-fe0f',
    title: 'merman: medium skin tone'
  },
  {
    id: 1280,
    code: '1f9dc-1f3fe-200d-2642-fe0f',
    title: 'merman: medium-dark skin tone'
  },
  {
    id: 1281,
    code: '1f9dc-1f3ff-200d-2642-fe0f',
    title: 'merman: dark skin tone'
  },
  { id: 1282, code: '1f9dc-200d-2640-fe0f', title: 'mermaid' },
  {
    id: 1283,
    code: '1f9dc-1f3fb-200d-2640-fe0f',
    title: 'mermaid: light skin tone'
  },
  {
    id: 1284,
    code: '1f9dc-1f3fc-200d-2640-fe0f',
    title: 'mermaid: medium-light skin tone'
  },
  {
    id: 1285,
    code: '1f9dc-1f3fd-200d-2640-fe0f',
    title: 'mermaid: medium skin tone'
  },
  {
    id: 1286,
    code: '1f9dc-1f3fe-200d-2640-fe0f',
    title: 'mermaid: medium-dark skin tone'
  },
  {
    id: 1287,
    code: '1f9dc-1f3ff-200d-2640-fe0f',
    title: 'mermaid: dark skin tone'
  },
  { id: 1288, code: '1f9dd', title: 'elf' },
  { id: 1289, code: '1f9dd-1f3fb', title: 'elf: light skin tone' },
  { id: 1290, code: '1f9dd-1f3fc', title: 'elf: medium-light skin tone' },
  { id: 1291, code: '1f9dd-1f3fd', title: 'elf: medium skin tone' },
  { id: 1292, code: '1f9dd-1f3fe', title: 'elf: medium-dark skin tone' },
  { id: 1293, code: '1f9dd-1f3ff', title: 'elf: dark skin tone' },
  { id: 1294, code: '1f9dd-200d-2642-fe0f', title: 'man elf' },
  {
    id: 1295,
    code: '1f9dd-1f3fb-200d-2642-fe0f',
    title: 'man elf: light skin tone'
  },
  {
    id: 1296,
    code: '1f9dd-1f3fc-200d-2642-fe0f',
    title: 'man elf: medium-light skin tone'
  },
  {
    id: 1297,
    code: '1f9dd-1f3fd-200d-2642-fe0f',
    title: 'man elf: medium skin tone'
  },
  {
    id: 1298,
    code: '1f9dd-1f3fe-200d-2642-fe0f',
    title: 'man elf: medium-dark skin tone'
  },
  {
    id: 1299,
    code: '1f9dd-1f3ff-200d-2642-fe0f',
    title: 'man elf: dark skin tone'
  },
  { id: 1300, code: '1f9dd-200d-2640-fe0f', title: 'woman elf' },
  {
    id: 1301,
    code: '1f9dd-1f3fb-200d-2640-fe0f',
    title: 'woman elf: light skin tone'
  },
  {
    id: 1302,
    code: '1f9dd-1f3fc-200d-2640-fe0f',
    title: 'woman elf: medium-light skin tone'
  },
  {
    id: 1303,
    code: '1f9dd-1f3fd-200d-2640-fe0f',
    title: 'woman elf: medium skin tone'
  },
  {
    id: 1304,
    code: '1f9dd-1f3fe-200d-2640-fe0f',
    title: 'woman elf: medium-dark skin tone'
  },
  {
    id: 1305,
    code: '1f9dd-1f3ff-200d-2640-fe0f',
    title: 'woman elf: dark skin tone'
  },
  { id: 1306, code: '1f9de', title: 'genie' },
  { id: 1307, code: '1f9de-200d-2642-fe0f', title: 'man genie' },
  { id: 1308, code: '1f9de-200d-2640-fe0f', title: 'woman genie' },
  { id: 1309, code: '1f9df', title: 'zombie' },
  { id: 1310, code: '1f9df-200d-2642-fe0f', title: 'man zombie' },
  { id: 1311, code: '1f9df-200d-2640-fe0f', title: 'woman zombie' },
  { id: 1312, code: '1f486', title: 'person getting massage' },
  {
    id: 1313,
    code: '1f486-1f3fb',
    title: 'person getting massage: light skin tone'
  },
  {
    id: 1314,
    code: '1f486-1f3fc',
    title: 'person getting massage: medium-light skin tone'
  },
  {
    id: 1315,
    code: '1f486-1f3fd',
    title: 'person getting massage: medium skin tone'
  },
  {
    id: 1316,
    code: '1f486-1f3fe',
    title: 'person getting massage: medium-dark skin tone'
  },
  {
    id: 1317,
    code: '1f486-1f3ff',
    title: 'person getting massage: dark skin tone'
  },
  { id: 1318, code: '1f486-200d-2642-fe0f', title: 'man getting massage' },
  {
    id: 1319,
    code: '1f486-1f3fb-200d-2642-fe0f',
    title: 'man getting massage: light skin tone'
  },
  {
    id: 1320,
    code: '1f486-1f3fc-200d-2642-fe0f',
    title: 'man getting massage: medium-light skin tone'
  },
  {
    id: 1321,
    code: '1f486-1f3fd-200d-2642-fe0f',
    title: 'man getting massage: medium skin tone'
  },
  {
    id: 1322,
    code: '1f486-1f3fe-200d-2642-fe0f',
    title: 'man getting massage: medium-dark skin tone'
  },
  {
    id: 1323,
    code: '1f486-1f3ff-200d-2642-fe0f',
    title: 'man getting massage: dark skin tone'
  },
  { id: 1324, code: '1f486-200d-2640-fe0f', title: 'woman getting massage' },
  {
    id: 1325,
    code: '1f486-1f3fb-200d-2640-fe0f',
    title: 'woman getting massage: light skin tone'
  },
  {
    id: 1326,
    code: '1f486-1f3fc-200d-2640-fe0f',
    title: 'woman getting massage: medium-light skin tone'
  },
  {
    id: 1327,
    code: '1f486-1f3fd-200d-2640-fe0f',
    title: 'woman getting massage: medium skin tone'
  },
  {
    id: 1328,
    code: '1f486-1f3fe-200d-2640-fe0f',
    title: 'woman getting massage: medium-dark skin tone'
  },
  {
    id: 1329,
    code: '1f486-1f3ff-200d-2640-fe0f',
    title: 'woman getting massage: dark skin tone'
  },
  { id: 1330, code: '1f487', title: 'person getting haircut' },
  {
    id: 1331,
    code: '1f487-1f3fb',
    title: 'person getting haircut: light skin tone'
  },
  {
    id: 1332,
    code: '1f487-1f3fc',
    title: 'person getting haircut: medium-light skin tone'
  },
  {
    id: 1333,
    code: '1f487-1f3fd',
    title: 'person getting haircut: medium skin tone'
  },
  {
    id: 1334,
    code: '1f487-1f3fe',
    title: 'person getting haircut: medium-dark skin tone'
  },
  {
    id: 1335,
    code: '1f487-1f3ff',
    title: 'person getting haircut: dark skin tone'
  },
  { id: 1336, code: '1f487-200d-2642-fe0f', title: 'man getting haircut' },
  {
    id: 1337,
    code: '1f487-1f3fb-200d-2642-fe0f',
    title: 'man getting haircut: light skin tone'
  },
  {
    id: 1338,
    code: '1f487-1f3fc-200d-2642-fe0f',
    title: 'man getting haircut: medium-light skin tone'
  },
  {
    id: 1339,
    code: '1f487-1f3fd-200d-2642-fe0f',
    title: 'man getting haircut: medium skin tone'
  },
  {
    id: 1340,
    code: '1f487-1f3fe-200d-2642-fe0f',
    title: 'man getting haircut: medium-dark skin tone'
  },
  {
    id: 1341,
    code: '1f487-1f3ff-200d-2642-fe0f',
    title: 'man getting haircut: dark skin tone'
  },
  { id: 1342, code: '1f487-200d-2640-fe0f', title: 'woman getting haircut' },
  {
    id: 1343,
    code: '1f487-1f3fb-200d-2640-fe0f',
    title: 'woman getting haircut: light skin tone'
  },
  {
    id: 1344,
    code: '1f487-1f3fc-200d-2640-fe0f',
    title: 'woman getting haircut: medium-light skin tone'
  },
  {
    id: 1345,
    code: '1f487-1f3fd-200d-2640-fe0f',
    title: 'woman getting haircut: medium skin tone'
  },
  {
    id: 1346,
    code: '1f487-1f3fe-200d-2640-fe0f',
    title: 'woman getting haircut: medium-dark skin tone'
  },
  {
    id: 1347,
    code: '1f487-1f3ff-200d-2640-fe0f',
    title: 'woman getting haircut: dark skin tone'
  },
  { id: 1348, code: '1f6b6', title: 'person walking' },
  { id: 1349, code: '1f6b6-1f3fb', title: 'person walking: light skin tone' },
  {
    id: 1350,
    code: '1f6b6-1f3fc',
    title: 'person walking: medium-light skin tone'
  },
  { id: 1351, code: '1f6b6-1f3fd', title: 'person walking: medium skin tone' },
  {
    id: 1352,
    code: '1f6b6-1f3fe',
    title: 'person walking: medium-dark skin tone'
  },
  { id: 1353, code: '1f6b6-1f3ff', title: 'person walking: dark skin tone' },
  { id: 1354, code: '1f6b6-200d-2642-fe0f', title: 'man walking' },
  {
    id: 1355,
    code: '1f6b6-1f3fb-200d-2642-fe0f',
    title: 'man walking: light skin tone'
  },
  {
    id: 1356,
    code: '1f6b6-1f3fc-200d-2642-fe0f',
    title: 'man walking: medium-light skin tone'
  },
  {
    id: 1357,
    code: '1f6b6-1f3fd-200d-2642-fe0f',
    title: 'man walking: medium skin tone'
  },
  {
    id: 1358,
    code: '1f6b6-1f3fe-200d-2642-fe0f',
    title: 'man walking: medium-dark skin tone'
  },
  {
    id: 1359,
    code: '1f6b6-1f3ff-200d-2642-fe0f',
    title: 'man walking: dark skin tone'
  },
  { id: 1360, code: '1f6b6-200d-2640-fe0f', title: 'woman walking' },
  {
    id: 1361,
    code: '1f6b6-1f3fb-200d-2640-fe0f',
    title: 'woman walking: light skin tone'
  },
  {
    id: 1362,
    code: '1f6b6-1f3fc-200d-2640-fe0f',
    title: 'woman walking: medium-light skin tone'
  },
  {
    id: 1363,
    code: '1f6b6-1f3fd-200d-2640-fe0f',
    title: 'woman walking: medium skin tone'
  },
  {
    id: 1364,
    code: '1f6b6-1f3fe-200d-2640-fe0f',
    title: 'woman walking: medium-dark skin tone'
  },
  {
    id: 1365,
    code: '1f6b6-1f3ff-200d-2640-fe0f',
    title: 'woman walking: dark skin tone'
  },
  { id: 1366, code: '1f9cd', title: 'person standing' },
  { id: 1367, code: '1f9cd-1f3fb', title: 'person standing: light skin tone' },
  {
    id: 1368,
    code: '1f9cd-1f3fc',
    title: 'person standing: medium-light skin tone'
  },
  { id: 1369, code: '1f9cd-1f3fd', title: 'person standing: medium skin tone' },
  {
    id: 1370,
    code: '1f9cd-1f3fe',
    title: 'person standing: medium-dark skin tone'
  },
  { id: 1371, code: '1f9cd-1f3ff', title: 'person standing: dark skin tone' },
  { id: 1372, code: '1f9cd-200d-2642-fe0f', title: 'man standing' },
  {
    id: 1373,
    code: '1f9cd-1f3fb-200d-2642-fe0f',
    title: 'man standing: light skin tone'
  },
  {
    id: 1374,
    code: '1f9cd-1f3fc-200d-2642-fe0f',
    title: 'man standing: medium-light skin tone'
  },
  {
    id: 1375,
    code: '1f9cd-1f3fd-200d-2642-fe0f',
    title: 'man standing: medium skin tone'
  },
  {
    id: 1376,
    code: '1f9cd-1f3fe-200d-2642-fe0f',
    title: 'man standing: medium-dark skin tone'
  },
  {
    id: 1377,
    code: '1f9cd-1f3ff-200d-2642-fe0f',
    title: 'man standing: dark skin tone'
  },
  { id: 1378, code: '1f9cd-200d-2640-fe0f', title: 'woman standing' },
  {
    id: 1379,
    code: '1f9cd-1f3fb-200d-2640-fe0f',
    title: 'woman standing: light skin tone'
  },
  {
    id: 1380,
    code: '1f9cd-1f3fc-200d-2640-fe0f',
    title: 'woman standing: medium-light skin tone'
  },
  {
    id: 1381,
    code: '1f9cd-1f3fd-200d-2640-fe0f',
    title: 'woman standing: medium skin tone'
  },
  {
    id: 1382,
    code: '1f9cd-1f3fe-200d-2640-fe0f',
    title: 'woman standing: medium-dark skin tone'
  },
  {
    id: 1383,
    code: '1f9cd-1f3ff-200d-2640-fe0f',
    title: 'woman standing: dark skin tone'
  },
  { id: 1384, code: '1f9ce', title: 'person kneeling' },
  { id: 1385, code: '1f9ce-1f3fb', title: 'person kneeling: light skin tone' },
  {
    id: 1386,
    code: '1f9ce-1f3fc',
    title: 'person kneeling: medium-light skin tone'
  },
  { id: 1387, code: '1f9ce-1f3fd', title: 'person kneeling: medium skin tone' },
  {
    id: 1388,
    code: '1f9ce-1f3fe',
    title: 'person kneeling: medium-dark skin tone'
  },
  { id: 1389, code: '1f9ce-1f3ff', title: 'person kneeling: dark skin tone' },
  { id: 1390, code: '1f9ce-200d-2642-fe0f', title: 'man kneeling' },
  {
    id: 1391,
    code: '1f9ce-1f3fb-200d-2642-fe0f',
    title: 'man kneeling: light skin tone'
  },
  {
    id: 1392,
    code: '1f9ce-1f3fc-200d-2642-fe0f',
    title: 'man kneeling: medium-light skin tone'
  },
  {
    id: 1393,
    code: '1f9ce-1f3fd-200d-2642-fe0f',
    title: 'man kneeling: medium skin tone'
  },
  {
    id: 1394,
    code: '1f9ce-1f3fe-200d-2642-fe0f',
    title: 'man kneeling: medium-dark skin tone'
  },
  {
    id: 1395,
    code: '1f9ce-1f3ff-200d-2642-fe0f',
    title: 'man kneeling: dark skin tone'
  },
  { id: 1396, code: '1f9ce-200d-2640-fe0f', title: 'woman kneeling' },
  {
    id: 1397,
    code: '1f9ce-1f3fb-200d-2640-fe0f',
    title: 'woman kneeling: light skin tone'
  },
  {
    id: 1398,
    code: '1f9ce-1f3fc-200d-2640-fe0f',
    title: 'woman kneeling: medium-light skin tone'
  },
  {
    id: 1399,
    code: '1f9ce-1f3fd-200d-2640-fe0f',
    title: 'woman kneeling: medium skin tone'
  },
  {
    id: 1400,
    code: '1f9ce-1f3fe-200d-2640-fe0f',
    title: 'woman kneeling: medium-dark skin tone'
  },
  {
    id: 1401,
    code: '1f9ce-1f3ff-200d-2640-fe0f',
    title: 'woman kneeling: dark skin tone'
  },
  { id: 1402, code: '1f9d1-200d-1f9af', title: 'person with white cane' },
  {
    id: 1403,
    code: '1f9d1-1f3fb-200d-1f9af',
    title: 'person with white cane: light skin tone'
  },
  {
    id: 1404,
    code: '1f9d1-1f3fc-200d-1f9af',
    title: 'person with white cane: medium-light skin tone'
  },
  {
    id: 1405,
    code: '1f9d1-1f3fd-200d-1f9af',
    title: 'person with white cane: medium skin tone'
  },
  {
    id: 1406,
    code: '1f9d1-1f3fe-200d-1f9af',
    title: 'person with white cane: medium-dark skin tone'
  },
  {
    id: 1407,
    code: '1f9d1-1f3ff-200d-1f9af',
    title: 'person with white cane: dark skin tone'
  },
  { id: 1408, code: '1f468-200d-1f9af', title: 'man with white cane' },
  {
    id: 1409,
    code: '1f468-1f3fb-200d-1f9af',
    title: 'man with white cane: light skin tone'
  },
  {
    id: 1410,
    code: '1f468-1f3fc-200d-1f9af',
    title: 'man with white cane: medium-light skin tone'
  },
  {
    id: 1411,
    code: '1f468-1f3fd-200d-1f9af',
    title: 'man with white cane: medium skin tone'
  },
  {
    id: 1412,
    code: '1f468-1f3fe-200d-1f9af',
    title: 'man with white cane: medium-dark skin tone'
  },
  {
    id: 1413,
    code: '1f468-1f3ff-200d-1f9af',
    title: 'man with white cane: dark skin tone'
  },
  { id: 1414, code: '1f469-200d-1f9af', title: 'woman with white cane' },
  {
    id: 1415,
    code: '1f469-1f3fb-200d-1f9af',
    title: 'woman with white cane: light skin tone'
  },
  {
    id: 1416,
    code: '1f469-1f3fc-200d-1f9af',
    title: 'woman with white cane: medium-light skin tone'
  },
  {
    id: 1417,
    code: '1f469-1f3fd-200d-1f9af',
    title: 'woman with white cane: medium skin tone'
  },
  {
    id: 1418,
    code: '1f469-1f3fe-200d-1f9af',
    title: 'woman with white cane: medium-dark skin tone'
  },
  {
    id: 1419,
    code: '1f469-1f3ff-200d-1f9af',
    title: 'woman with white cane: dark skin tone'
  },
  {
    id: 1420,
    code: '1f9d1-200d-1f9bc',
    title: 'person in motorized wheelchair'
  },
  {
    id: 1421,
    code: '1f9d1-1f3fb-200d-1f9bc',
    title: 'person in motorized wheelchair: light skin tone'
  },
  {
    id: 1422,
    code: '1f9d1-1f3fc-200d-1f9bc',
    title: 'person in motorized wheelchair: medium-light skin tone'
  },
  {
    id: 1423,
    code: '1f9d1-1f3fd-200d-1f9bc',
    title: 'person in motorized wheelchair: medium skin tone'
  },
  {
    id: 1424,
    code: '1f9d1-1f3fe-200d-1f9bc',
    title: 'person in motorized wheelchair: medium-dark skin tone'
  },
  {
    id: 1425,
    code: '1f9d1-1f3ff-200d-1f9bc',
    title: 'person in motorized wheelchair: dark skin tone'
  },
  { id: 1426, code: '1f468-200d-1f9bc', title: 'man in motorized wheelchair' },
  {
    id: 1427,
    code: '1f468-1f3fb-200d-1f9bc',
    title: 'man in motorized wheelchair: light skin tone'
  },
  {
    id: 1428,
    code: '1f468-1f3fc-200d-1f9bc',
    title: 'man in motorized wheelchair: medium-light skin tone'
  },
  {
    id: 1429,
    code: '1f468-1f3fd-200d-1f9bc',
    title: 'man in motorized wheelchair: medium skin tone'
  },
  {
    id: 1430,
    code: '1f468-1f3fe-200d-1f9bc',
    title: 'man in motorized wheelchair: medium-dark skin tone'
  },
  {
    id: 1431,
    code: '1f468-1f3ff-200d-1f9bc',
    title: 'man in motorized wheelchair: dark skin tone'
  },
  {
    id: 1432,
    code: '1f469-200d-1f9bc',
    title: 'woman in motorized wheelchair'
  },
  {
    id: 1433,
    code: '1f469-1f3fb-200d-1f9bc',
    title: 'woman in motorized wheelchair: light skin tone'
  },
  {
    id: 1434,
    code: '1f469-1f3fc-200d-1f9bc',
    title: 'woman in motorized wheelchair: medium-light skin tone'
  },
  {
    id: 1435,
    code: '1f469-1f3fd-200d-1f9bc',
    title: 'woman in motorized wheelchair: medium skin tone'
  },
  {
    id: 1436,
    code: '1f469-1f3fe-200d-1f9bc',
    title: 'woman in motorized wheelchair: medium-dark skin tone'
  },
  {
    id: 1437,
    code: '1f469-1f3ff-200d-1f9bc',
    title: 'woman in motorized wheelchair: dark skin tone'
  },
  { id: 1438, code: '1f9d1-200d-1f9bd', title: 'person in manual wheelchair' },
  {
    id: 1439,
    code: '1f9d1-1f3fb-200d-1f9bd',
    title: 'person in manual wheelchair: light skin tone'
  },
  {
    id: 1440,
    code: '1f9d1-1f3fc-200d-1f9bd',
    title: 'person in manual wheelchair: medium-light skin tone'
  },
  {
    id: 1441,
    code: '1f9d1-1f3fd-200d-1f9bd',
    title: 'person in manual wheelchair: medium skin tone'
  },
  {
    id: 1442,
    code: '1f9d1-1f3fe-200d-1f9bd',
    title: 'person in manual wheelchair: medium-dark skin tone'
  },
  {
    id: 1443,
    code: '1f9d1-1f3ff-200d-1f9bd',
    title: 'person in manual wheelchair: dark skin tone'
  },
  { id: 1444, code: '1f468-200d-1f9bd', title: 'man in manual wheelchair' },
  {
    id: 1445,
    code: '1f468-1f3fb-200d-1f9bd',
    title: 'man in manual wheelchair: light skin tone'
  },
  {
    id: 1446,
    code: '1f468-1f3fc-200d-1f9bd',
    title: 'man in manual wheelchair: medium-light skin tone'
  },
  {
    id: 1447,
    code: '1f468-1f3fd-200d-1f9bd',
    title: 'man in manual wheelchair: medium skin tone'
  },
  {
    id: 1448,
    code: '1f468-1f3fe-200d-1f9bd',
    title: 'man in manual wheelchair: medium-dark skin tone'
  },
  {
    id: 1449,
    code: '1f468-1f3ff-200d-1f9bd',
    title: 'man in manual wheelchair: dark skin tone'
  },
  { id: 1450, code: '1f469-200d-1f9bd', title: 'woman in manual wheelchair' },
  {
    id: 1451,
    code: '1f469-1f3fb-200d-1f9bd',
    title: 'woman in manual wheelchair: light skin tone'
  },
  {
    id: 1452,
    code: '1f469-1f3fc-200d-1f9bd',
    title: 'woman in manual wheelchair: medium-light skin tone'
  },
  {
    id: 1453,
    code: '1f469-1f3fd-200d-1f9bd',
    title: 'woman in manual wheelchair: medium skin tone'
  },
  {
    id: 1454,
    code: '1f469-1f3fe-200d-1f9bd',
    title: 'woman in manual wheelchair: medium-dark skin tone'
  },
  {
    id: 1455,
    code: '1f469-1f3ff-200d-1f9bd',
    title: 'woman in manual wheelchair: dark skin tone'
  },
  { id: 1456, code: '1f3c3', title: 'person running' },
  { id: 1457, code: '1f3c3-1f3fb', title: 'person running: light skin tone' },
  {
    id: 1458,
    code: '1f3c3-1f3fc',
    title: 'person running: medium-light skin tone'
  },
  { id: 1459, code: '1f3c3-1f3fd', title: 'person running: medium skin tone' },
  {
    id: 1460,
    code: '1f3c3-1f3fe',
    title: 'person running: medium-dark skin tone'
  },
  { id: 1461, code: '1f3c3-1f3ff', title: 'person running: dark skin tone' },
  { id: 1462, code: '1f3c3-200d-2642-fe0f', title: 'man running' },
  {
    id: 1463,
    code: '1f3c3-1f3fb-200d-2642-fe0f',
    title: 'man running: light skin tone'
  },
  {
    id: 1464,
    code: '1f3c3-1f3fc-200d-2642-fe0f',
    title: 'man running: medium-light skin tone'
  },
  {
    id: 1465,
    code: '1f3c3-1f3fd-200d-2642-fe0f',
    title: 'man running: medium skin tone'
  },
  {
    id: 1466,
    code: '1f3c3-1f3fe-200d-2642-fe0f',
    title: 'man running: medium-dark skin tone'
  },
  {
    id: 1467,
    code: '1f3c3-1f3ff-200d-2642-fe0f',
    title: 'man running: dark skin tone'
  },
  { id: 1468, code: '1f3c3-200d-2640-fe0f', title: 'woman running' },
  {
    id: 1469,
    code: '1f3c3-1f3fb-200d-2640-fe0f',
    title: 'woman running: light skin tone'
  },
  {
    id: 1470,
    code: '1f3c3-1f3fc-200d-2640-fe0f',
    title: 'woman running: medium-light skin tone'
  },
  {
    id: 1471,
    code: '1f3c3-1f3fd-200d-2640-fe0f',
    title: 'woman running: medium skin tone'
  },
  {
    id: 1472,
    code: '1f3c3-1f3fe-200d-2640-fe0f',
    title: 'woman running: medium-dark skin tone'
  },
  {
    id: 1473,
    code: '1f3c3-1f3ff-200d-2640-fe0f',
    title: 'woman running: dark skin tone'
  },
  { id: 1474, code: '1f483', title: 'woman dancing' },
  { id: 1475, code: '1f483-1f3fb', title: 'woman dancing: light skin tone' },
  {
    id: 1476,
    code: '1f483-1f3fc',
    title: 'woman dancing: medium-light skin tone'
  },
  { id: 1477, code: '1f483-1f3fd', title: 'woman dancing: medium skin tone' },
  {
    id: 1478,
    code: '1f483-1f3fe',
    title: 'woman dancing: medium-dark skin tone'
  },
  { id: 1479, code: '1f483-1f3ff', title: 'woman dancing: dark skin tone' },
  { id: 1480, code: '1f57a', title: 'man dancing' },
  { id: 1481, code: '1f57a-1f3fb', title: 'man dancing: light skin tone' },
  {
    id: 1482,
    code: '1f57a-1f3fc',
    title: 'man dancing: medium-light skin tone'
  },
  { id: 1483, code: '1f57a-1f3fd', title: 'man dancing: medium skin tone' },
  {
    id: 1484,
    code: '1f57a-1f3fe',
    title: 'man dancing: medium-dark skin tone'
  },
  { id: 1485, code: '1f57a-1f3ff', title: 'man dancing: dark skin tone' },
  { id: 1486, code: '1f574', title: 'person in suit levitating' },
  {
    id: 1487,
    code: '1f574-1f3fb',
    title: 'person in suit levitating: light skin tone'
  },
  {
    id: 1488,
    code: '1f574-1f3fc',
    title: 'person in suit levitating: medium-light skin tone'
  },
  {
    id: 1489,
    code: '1f574-1f3fd',
    title: 'person in suit levitating: medium skin tone'
  },
  {
    id: 1490,
    code: '1f574-1f3fe',
    title: 'person in suit levitating: medium-dark skin tone'
  },
  {
    id: 1491,
    code: '1f574-1f3ff',
    title: 'person in suit levitating: dark skin tone'
  },
  { id: 1492, code: '1f46f', title: 'people with bunny ears' },
  { id: 1493, code: '1f46f-200d-2642-fe0f', title: 'men with bunny ears' },
  { id: 1494, code: '1f46f-200d-2640-fe0f', title: 'women with bunny ears' },
  { id: 1495, code: '1f9d6', title: 'person in steamy room' },
  {
    id: 1496,
    code: '1f9d6-1f3fb',
    title: 'person in steamy room: light skin tone'
  },
  {
    id: 1497,
    code: '1f9d6-1f3fc',
    title: 'person in steamy room: medium-light skin tone'
  },
  {
    id: 1498,
    code: '1f9d6-1f3fd',
    title: 'person in steamy room: medium skin tone'
  },
  {
    id: 1499,
    code: '1f9d6-1f3fe',
    title: 'person in steamy room: medium-dark skin tone'
  },
  {
    id: 1500,
    code: '1f9d6-1f3ff',
    title: 'person in steamy room: dark skin tone'
  },
  { id: 1501, code: '1f9d6-200d-2642-fe0f', title: 'man in steamy room' },
  {
    id: 1502,
    code: '1f9d6-1f3fb-200d-2642-fe0f',
    title: 'man in steamy room: light skin tone'
  },
  {
    id: 1503,
    code: '1f9d6-1f3fc-200d-2642-fe0f',
    title: 'man in steamy room: medium-light skin tone'
  },
  {
    id: 1504,
    code: '1f9d6-1f3fd-200d-2642-fe0f',
    title: 'man in steamy room: medium skin tone'
  },
  {
    id: 1505,
    code: '1f9d6-1f3fe-200d-2642-fe0f',
    title: 'man in steamy room: medium-dark skin tone'
  },
  {
    id: 1506,
    code: '1f9d6-1f3ff-200d-2642-fe0f',
    title: 'man in steamy room: dark skin tone'
  },
  { id: 1507, code: '1f9d6-200d-2640-fe0f', title: 'woman in steamy room' },
  {
    id: 1508,
    code: '1f9d6-1f3fb-200d-2640-fe0f',
    title: 'woman in steamy room: light skin tone'
  },
  {
    id: 1509,
    code: '1f9d6-1f3fc-200d-2640-fe0f',
    title: 'woman in steamy room: medium-light skin tone'
  },
  {
    id: 1510,
    code: '1f9d6-1f3fd-200d-2640-fe0f',
    title: 'woman in steamy room: medium skin tone'
  },
  {
    id: 1511,
    code: '1f9d6-1f3fe-200d-2640-fe0f',
    title: 'woman in steamy room: medium-dark skin tone'
  },
  {
    id: 1512,
    code: '1f9d6-1f3ff-200d-2640-fe0f',
    title: 'woman in steamy room: dark skin tone'
  },
  { id: 1513, code: '1f9d7', title: 'person climbing' },
  { id: 1514, code: '1f9d7-1f3fb', title: 'person climbing: light skin tone' },
  {
    id: 1515,
    code: '1f9d7-1f3fc',
    title: 'person climbing: medium-light skin tone'
  },
  { id: 1516, code: '1f9d7-1f3fd', title: 'person climbing: medium skin tone' },
  {
    id: 1517,
    code: '1f9d7-1f3fe',
    title: 'person climbing: medium-dark skin tone'
  },
  { id: 1518, code: '1f9d7-1f3ff', title: 'person climbing: dark skin tone' },
  { id: 1519, code: '1f9d7-200d-2642-fe0f', title: 'man climbing' },
  {
    id: 1520,
    code: '1f9d7-1f3fb-200d-2642-fe0f',
    title: 'man climbing: light skin tone'
  },
  {
    id: 1521,
    code: '1f9d7-1f3fc-200d-2642-fe0f',
    title: 'man climbing: medium-light skin tone'
  },
  {
    id: 1522,
    code: '1f9d7-1f3fd-200d-2642-fe0f',
    title: 'man climbing: medium skin tone'
  },
  {
    id: 1523,
    code: '1f9d7-1f3fe-200d-2642-fe0f',
    title: 'man climbing: medium-dark skin tone'
  },
  {
    id: 1524,
    code: '1f9d7-1f3ff-200d-2642-fe0f',
    title: 'man climbing: dark skin tone'
  },
  { id: 1525, code: '1f9d7-200d-2640-fe0f', title: 'woman climbing' },
  {
    id: 1526,
    code: '1f9d7-1f3fb-200d-2640-fe0f',
    title: 'woman climbing: light skin tone'
  },
  {
    id: 1527,
    code: '1f9d7-1f3fc-200d-2640-fe0f',
    title: 'woman climbing: medium-light skin tone'
  },
  {
    id: 1528,
    code: '1f9d7-1f3fd-200d-2640-fe0f',
    title: 'woman climbing: medium skin tone'
  },
  {
    id: 1529,
    code: '1f9d7-1f3fe-200d-2640-fe0f',
    title: 'woman climbing: medium-dark skin tone'
  },
  {
    id: 1530,
    code: '1f9d7-1f3ff-200d-2640-fe0f',
    title: 'woman climbing: dark skin tone'
  },
  { id: 1531, code: '1f93a', title: 'person fencing' },
  { id: 1532, code: '1f3c7', title: 'horse racing' },
  { id: 1533, code: '1f3c7-1f3fb', title: 'horse racing: light skin tone' },
  {
    id: 1534,
    code: '1f3c7-1f3fc',
    title: 'horse racing: medium-light skin tone'
  },
  { id: 1535, code: '1f3c7-1f3fd', title: 'horse racing: medium skin tone' },
  {
    id: 1536,
    code: '1f3c7-1f3fe',
    title: 'horse racing: medium-dark skin tone'
  },
  { id: 1537, code: '1f3c7-1f3ff', title: 'horse racing: dark skin tone' },
  { id: 1538, code: '26f7', title: 'skier' },
  { id: 1539, code: '26f7-1f3fb', title: 'skier, type-1-2' },
  { id: 1540, code: '26f7-1f3fc', title: 'skier, type-3' },
  { id: 1541, code: '26f7-1f3fd', title: 'skier, type-4' },
  { id: 1542, code: '26f7-1f3fe', title: 'skier, type-5' },
  { id: 1543, code: '26f7-1f3ff', title: 'skier, type-6' },
  { id: 1544, code: '1f3c2', title: 'snowboarder' },
  { id: 1545, code: '1f3c2-1f3fb', title: 'snowboarder: light skin tone' },
  {
    id: 1546,
    code: '1f3c2-1f3fc',
    title: 'snowboarder: medium-light skin tone'
  },
  { id: 1547, code: '1f3c2-1f3fd', title: 'snowboarder: medium skin tone' },
  {
    id: 1548,
    code: '1f3c2-1f3fe',
    title: 'snowboarder: medium-dark skin tone'
  },
  { id: 1549, code: '1f3c2-1f3ff', title: 'snowboarder: dark skin tone' },
  { id: 1550, code: '1f3cc', title: 'person golfing' },
  { id: 1551, code: '1f3cc-1f3fb', title: 'person golfing: light skin tone' },
  {
    id: 1552,
    code: '1f3cc-1f3fc',
    title: 'person golfing: medium-light skin tone'
  },
  { id: 1553, code: '1f3cc-1f3fd', title: 'person golfing: medium skin tone' },
  {
    id: 1554,
    code: '1f3cc-1f3fe',
    title: 'person golfing: medium-dark skin tone'
  },
  { id: 1555, code: '1f3cc-1f3ff', title: 'person golfing: dark skin tone' },
  { id: 1556, code: '1f3cc-fe0f-200d-2642-fe0f', title: 'man golfing' },
  {
    id: 1557,
    code: '1f3cc-1f3fb-200d-2642-fe0f',
    title: 'man golfing: light skin tone'
  },
  {
    id: 1558,
    code: '1f3cc-1f3fc-200d-2642-fe0f',
    title: 'man golfing: medium-light skin tone'
  },
  {
    id: 1559,
    code: '1f3cc-1f3fd-200d-2642-fe0f',
    title: 'man golfing: medium skin tone'
  },
  {
    id: 1560,
    code: '1f3cc-1f3fe-200d-2642-fe0f',
    title: 'man golfing: medium-dark skin tone'
  },
  {
    id: 1561,
    code: '1f3cc-1f3ff-200d-2642-fe0f',
    title: 'man golfing: dark skin tone'
  },
  { id: 1562, code: '1f3cc-fe0f-200d-2640-fe0f', title: 'woman golfing' },
  {
    id: 1563,
    code: '1f3cc-1f3fb-200d-2640-fe0f',
    title: 'woman golfing: light skin tone'
  },
  {
    id: 1564,
    code: '1f3cc-1f3fc-200d-2640-fe0f',
    title: 'woman golfing: medium-light skin tone'
  },
  {
    id: 1565,
    code: '1f3cc-1f3fd-200d-2640-fe0f',
    title: 'woman golfing: medium skin tone'
  },
  {
    id: 1566,
    code: '1f3cc-1f3fe-200d-2640-fe0f',
    title: 'woman golfing: medium-dark skin tone'
  },
  {
    id: 1567,
    code: '1f3cc-1f3ff-200d-2640-fe0f',
    title: 'woman golfing: dark skin tone'
  },
  { id: 1568, code: '1f3c4', title: 'person surfing' },
  { id: 1569, code: '1f3c4-1f3fb', title: 'person surfing: light skin tone' },
  {
    id: 1570,
    code: '1f3c4-1f3fc',
    title: 'person surfing: medium-light skin tone'
  },
  { id: 1571, code: '1f3c4-1f3fd', title: 'person surfing: medium skin tone' },
  {
    id: 1572,
    code: '1f3c4-1f3fe',
    title: 'person surfing: medium-dark skin tone'
  },
  { id: 1573, code: '1f3c4-1f3ff', title: 'person surfing: dark skin tone' },
  { id: 1574, code: '1f3c4-200d-2642-fe0f', title: 'man surfing' },
  {
    id: 1575,
    code: '1f3c4-1f3fb-200d-2642-fe0f',
    title: 'man surfing: light skin tone'
  },
  {
    id: 1576,
    code: '1f3c4-1f3fc-200d-2642-fe0f',
    title: 'man surfing: medium-light skin tone'
  },
  {
    id: 1577,
    code: '1f3c4-1f3fd-200d-2642-fe0f',
    title: 'man surfing: medium skin tone'
  },
  {
    id: 1578,
    code: '1f3c4-1f3fe-200d-2642-fe0f',
    title: 'man surfing: medium-dark skin tone'
  },
  {
    id: 1579,
    code: '1f3c4-1f3ff-200d-2642-fe0f',
    title: 'man surfing: dark skin tone'
  },
  { id: 1580, code: '1f3c4-200d-2640-fe0f', title: 'woman surfing' },
  {
    id: 1581,
    code: '1f3c4-1f3fb-200d-2640-fe0f',
    title: 'woman surfing: light skin tone'
  },
  {
    id: 1582,
    code: '1f3c4-1f3fc-200d-2640-fe0f',
    title: 'woman surfing: medium-light skin tone'
  },
  {
    id: 1583,
    code: '1f3c4-1f3fd-200d-2640-fe0f',
    title: 'woman surfing: medium skin tone'
  },
  {
    id: 1584,
    code: '1f3c4-1f3fe-200d-2640-fe0f',
    title: 'woman surfing: medium-dark skin tone'
  },
  {
    id: 1585,
    code: '1f3c4-1f3ff-200d-2640-fe0f',
    title: 'woman surfing: dark skin tone'
  },
  { id: 1586, code: '1f6a3', title: 'person rowing boat' },
  {
    id: 1587,
    code: '1f6a3-1f3fb',
    title: 'person rowing boat: light skin tone'
  },
  {
    id: 1588,
    code: '1f6a3-1f3fc',
    title: 'person rowing boat: medium-light skin tone'
  },
  {
    id: 1589,
    code: '1f6a3-1f3fd',
    title: 'person rowing boat: medium skin tone'
  },
  {
    id: 1590,
    code: '1f6a3-1f3fe',
    title: 'person rowing boat: medium-dark skin tone'
  },
  {
    id: 1591,
    code: '1f6a3-1f3ff',
    title: 'person rowing boat: dark skin tone'
  },
  { id: 1592, code: '1f6a3-200d-2642-fe0f', title: 'man rowing boat' },
  {
    id: 1593,
    code: '1f6a3-1f3fb-200d-2642-fe0f',
    title: 'man rowing boat: light skin tone'
  },
  {
    id: 1594,
    code: '1f6a3-1f3fc-200d-2642-fe0f',
    title: 'man rowing boat: medium-light skin tone'
  },
  {
    id: 1595,
    code: '1f6a3-1f3fd-200d-2642-fe0f',
    title: 'man rowing boat: medium skin tone'
  },
  {
    id: 1596,
    code: '1f6a3-1f3fe-200d-2642-fe0f',
    title: 'man rowing boat: medium-dark skin tone'
  },
  {
    id: 1597,
    code: '1f6a3-1f3ff-200d-2642-fe0f',
    title: 'man rowing boat: dark skin tone'
  },
  { id: 1598, code: '1f6a3-200d-2640-fe0f', title: 'woman rowing boat' },
  {
    id: 1599,
    code: '1f6a3-1f3fb-200d-2640-fe0f',
    title: 'woman rowing boat: light skin tone'
  },
  {
    id: 1600,
    code: '1f6a3-1f3fc-200d-2640-fe0f',
    title: 'woman rowing boat: medium-light skin tone'
  },
  {
    id: 1601,
    code: '1f6a3-1f3fd-200d-2640-fe0f',
    title: 'woman rowing boat: medium skin tone'
  },
  {
    id: 1602,
    code: '1f6a3-1f3fe-200d-2640-fe0f',
    title: 'woman rowing boat: medium-dark skin tone'
  },
  {
    id: 1603,
    code: '1f6a3-1f3ff-200d-2640-fe0f',
    title: 'woman rowing boat: dark skin tone'
  },
  { id: 1604, code: '1f3ca', title: 'person swimming' },
  { id: 1605, code: '1f3ca-1f3fb', title: 'person swimming: light skin tone' },
  {
    id: 1606,
    code: '1f3ca-1f3fc',
    title: 'person swimming: medium-light skin tone'
  },
  { id: 1607, code: '1f3ca-1f3fd', title: 'person swimming: medium skin tone' },
  {
    id: 1608,
    code: '1f3ca-1f3fe',
    title: 'person swimming: medium-dark skin tone'
  },
  { id: 1609, code: '1f3ca-1f3ff', title: 'person swimming: dark skin tone' },
  { id: 1610, code: '1f3ca-200d-2642-fe0f', title: 'man swimming' },
  {
    id: 1611,
    code: '1f3ca-1f3fb-200d-2642-fe0f',
    title: 'man swimming: light skin tone'
  },
  {
    id: 1612,
    code: '1f3ca-1f3fc-200d-2642-fe0f',
    title: 'man swimming: medium-light skin tone'
  },
  {
    id: 1613,
    code: '1f3ca-1f3fd-200d-2642-fe0f',
    title: 'man swimming: medium skin tone'
  },
  {
    id: 1614,
    code: '1f3ca-1f3fe-200d-2642-fe0f',
    title: 'man swimming: medium-dark skin tone'
  },
  {
    id: 1615,
    code: '1f3ca-1f3ff-200d-2642-fe0f',
    title: 'man swimming: dark skin tone'
  },
  { id: 1616, code: '1f3ca-200d-2640-fe0f', title: 'woman swimming' },
  {
    id: 1617,
    code: '1f3ca-1f3fb-200d-2640-fe0f',
    title: 'woman swimming: light skin tone'
  },
  {
    id: 1618,
    code: '1f3ca-1f3fc-200d-2640-fe0f',
    title: 'woman swimming: medium-light skin tone'
  },
  {
    id: 1619,
    code: '1f3ca-1f3fd-200d-2640-fe0f',
    title: 'woman swimming: medium skin tone'
  },
  {
    id: 1620,
    code: '1f3ca-1f3fe-200d-2640-fe0f',
    title: 'woman swimming: medium-dark skin tone'
  },
  {
    id: 1621,
    code: '1f3ca-1f3ff-200d-2640-fe0f',
    title: 'woman swimming: dark skin tone'
  },
  { id: 1622, code: '26f9', title: 'person bouncing ball' },
  {
    id: 1623,
    code: '26f9-1f3fb',
    title: 'person bouncing ball: light skin tone'
  },
  {
    id: 1624,
    code: '26f9-1f3fc',
    title: 'person bouncing ball: medium-light skin tone'
  },
  {
    id: 1625,
    code: '26f9-1f3fd',
    title: 'person bouncing ball: medium skin tone'
  },
  {
    id: 1626,
    code: '26f9-1f3fe',
    title: 'person bouncing ball: medium-dark skin tone'
  },
  {
    id: 1627,
    code: '26f9-1f3ff',
    title: 'person bouncing ball: dark skin tone'
  },
  { id: 1628, code: '26f9-fe0f-200d-2642-fe0f', title: 'man bouncing ball' },
  {
    id: 1629,
    code: '26f9-1f3fb-200d-2642-fe0f',
    title: 'man bouncing ball: light skin tone'
  },
  {
    id: 1630,
    code: '26f9-1f3fc-200d-2642-fe0f',
    title: 'man bouncing ball: medium-light skin tone'
  },
  {
    id: 1631,
    code: '26f9-1f3fd-200d-2642-fe0f',
    title: 'man bouncing ball: medium skin tone'
  },
  {
    id: 1632,
    code: '26f9-1f3fe-200d-2642-fe0f',
    title: 'man bouncing ball: medium-dark skin tone'
  },
  {
    id: 1633,
    code: '26f9-1f3ff-200d-2642-fe0f',
    title: 'man bouncing ball: dark skin tone'
  },
  { id: 1634, code: '26f9-fe0f-200d-2640-fe0f', title: 'woman bouncing ball' },
  {
    id: 1635,
    code: '26f9-1f3fb-200d-2640-fe0f',
    title: 'woman bouncing ball: light skin tone'
  },
  {
    id: 1636,
    code: '26f9-1f3fc-200d-2640-fe0f',
    title: 'woman bouncing ball: medium-light skin tone'
  },
  {
    id: 1637,
    code: '26f9-1f3fd-200d-2640-fe0f',
    title: 'woman bouncing ball: medium skin tone'
  },
  {
    id: 1638,
    code: '26f9-1f3fe-200d-2640-fe0f',
    title: 'woman bouncing ball: medium-dark skin tone'
  },
  {
    id: 1639,
    code: '26f9-1f3ff-200d-2640-fe0f',
    title: 'woman bouncing ball: dark skin tone'
  },
  { id: 1640, code: '1f3cb', title: 'person lifting weights' },
  {
    id: 1641,
    code: '1f3cb-1f3fb',
    title: 'person lifting weights: light skin tone'
  },
  {
    id: 1642,
    code: '1f3cb-1f3fc',
    title: 'person lifting weights: medium-light skin tone'
  },
  {
    id: 1643,
    code: '1f3cb-1f3fd',
    title: 'person lifting weights: medium skin tone'
  },
  {
    id: 1644,
    code: '1f3cb-1f3fe',
    title: 'person lifting weights: medium-dark skin tone'
  },
  {
    id: 1645,
    code: '1f3cb-1f3ff',
    title: 'person lifting weights: dark skin tone'
  },
  { id: 1646, code: '1f3cb-fe0f-200d-2642-fe0f', title: 'man lifting weights' },
  {
    id: 1647,
    code: '1f3cb-1f3fb-200d-2642-fe0f',
    title: 'man lifting weights: light skin tone'
  },
  {
    id: 1648,
    code: '1f3cb-1f3fc-200d-2642-fe0f',
    title: 'man lifting weights: medium-light skin tone'
  },
  {
    id: 1649,
    code: '1f3cb-1f3fd-200d-2642-fe0f',
    title: 'man lifting weights: medium skin tone'
  },
  {
    id: 1650,
    code: '1f3cb-1f3fe-200d-2642-fe0f',
    title: 'man lifting weights: medium-dark skin tone'
  },
  {
    id: 1651,
    code: '1f3cb-1f3ff-200d-2642-fe0f',
    title: 'man lifting weights: dark skin tone'
  },
  {
    id: 1652,
    code: '1f3cb-fe0f-200d-2640-fe0f',
    title: 'woman lifting weights'
  },
  {
    id: 1653,
    code: '1f3cb-1f3fb-200d-2640-fe0f',
    title: 'woman lifting weights: light skin tone'
  },
  {
    id: 1654,
    code: '1f3cb-1f3fc-200d-2640-fe0f',
    title: 'woman lifting weights: medium-light skin tone'
  },
  {
    id: 1655,
    code: '1f3cb-1f3fd-200d-2640-fe0f',
    title: 'woman lifting weights: medium skin tone'
  },
  {
    id: 1656,
    code: '1f3cb-1f3fe-200d-2640-fe0f',
    title: 'woman lifting weights: medium-dark skin tone'
  },
  {
    id: 1657,
    code: '1f3cb-1f3ff-200d-2640-fe0f',
    title: 'woman lifting weights: dark skin tone'
  },
  { id: 1658, code: '1f6b4', title: 'person biking' },
  { id: 1659, code: '1f6b4-1f3fb', title: 'person biking: light skin tone' },
  {
    id: 1660,
    code: '1f6b4-1f3fc',
    title: 'person biking: medium-light skin tone'
  },
  { id: 1661, code: '1f6b4-1f3fd', title: 'person biking: medium skin tone' },
  {
    id: 1662,
    code: '1f6b4-1f3fe',
    title: 'person biking: medium-dark skin tone'
  },
  { id: 1663, code: '1f6b4-1f3ff', title: 'person biking: dark skin tone' },
  { id: 1664, code: '1f6b4-200d-2642-fe0f', title: 'man biking' },
  {
    id: 1665,
    code: '1f6b4-1f3fb-200d-2642-fe0f',
    title: 'man biking: light skin tone'
  },
  {
    id: 1666,
    code: '1f6b4-1f3fc-200d-2642-fe0f',
    title: 'man biking: medium-light skin tone'
  },
  {
    id: 1667,
    code: '1f6b4-1f3fd-200d-2642-fe0f',
    title: 'man biking: medium skin tone'
  },
  {
    id: 1668,
    code: '1f6b4-1f3fe-200d-2642-fe0f',
    title: 'man biking: medium-dark skin tone'
  },
  {
    id: 1669,
    code: '1f6b4-1f3ff-200d-2642-fe0f',
    title: 'man biking: dark skin tone'
  },
  { id: 1670, code: '1f6b4-200d-2640-fe0f', title: 'woman biking' },
  {
    id: 1671,
    code: '1f6b4-1f3fb-200d-2640-fe0f',
    title: 'woman biking: light skin tone'
  },
  {
    id: 1672,
    code: '1f6b4-1f3fc-200d-2640-fe0f',
    title: 'woman biking: medium-light skin tone'
  },
  {
    id: 1673,
    code: '1f6b4-1f3fd-200d-2640-fe0f',
    title: 'woman biking: medium skin tone'
  },
  {
    id: 1674,
    code: '1f6b4-1f3fe-200d-2640-fe0f',
    title: 'woman biking: medium-dark skin tone'
  },
  {
    id: 1675,
    code: '1f6b4-1f3ff-200d-2640-fe0f',
    title: 'woman biking: dark skin tone'
  },
  { id: 1676, code: '1f6b5', title: 'person mountain biking' },
  {
    id: 1677,
    code: '1f6b5-1f3fb',
    title: 'person mountain biking: light skin tone'
  },
  {
    id: 1678,
    code: '1f6b5-1f3fc',
    title: 'person mountain biking: medium-light skin tone'
  },
  {
    id: 1679,
    code: '1f6b5-1f3fd',
    title: 'person mountain biking: medium skin tone'
  },
  {
    id: 1680,
    code: '1f6b5-1f3fe',
    title: 'person mountain biking: medium-dark skin tone'
  },
  {
    id: 1681,
    code: '1f6b5-1f3ff',
    title: 'person mountain biking: dark skin tone'
  },
  { id: 1682, code: '1f6b5-200d-2642-fe0f', title: 'man mountain biking' },
  {
    id: 1683,
    code: '1f6b5-1f3fb-200d-2642-fe0f',
    title: 'man mountain biking: light skin tone'
  },
  {
    id: 1684,
    code: '1f6b5-1f3fc-200d-2642-fe0f',
    title: 'man mountain biking: medium-light skin tone'
  },
  {
    id: 1685,
    code: '1f6b5-1f3fd-200d-2642-fe0f',
    title: 'man mountain biking: medium skin tone'
  },
  {
    id: 1686,
    code: '1f6b5-1f3fe-200d-2642-fe0f',
    title: 'man mountain biking: medium-dark skin tone'
  },
  {
    id: 1687,
    code: '1f6b5-1f3ff-200d-2642-fe0f',
    title: 'man mountain biking: dark skin tone'
  },
  { id: 1688, code: '1f6b5-200d-2640-fe0f', title: 'woman mountain biking' },
  {
    id: 1689,
    code: '1f6b5-1f3fb-200d-2640-fe0f',
    title: 'woman mountain biking: light skin tone'
  },
  {
    id: 1690,
    code: '1f6b5-1f3fc-200d-2640-fe0f',
    title: 'woman mountain biking: medium-light skin tone'
  },
  {
    id: 1691,
    code: '1f6b5-1f3fd-200d-2640-fe0f',
    title: 'woman mountain biking: medium skin tone'
  },
  {
    id: 1692,
    code: '1f6b5-1f3fe-200d-2640-fe0f',
    title: 'woman mountain biking: medium-dark skin tone'
  },
  {
    id: 1693,
    code: '1f6b5-1f3ff-200d-2640-fe0f',
    title: 'woman mountain biking: dark skin tone'
  },
  { id: 1694, code: '1f938', title: 'person cartwheeling' },
  {
    id: 1695,
    code: '1f938-1f3fb',
    title: 'person cartwheeling: light skin tone'
  },
  {
    id: 1696,
    code: '1f938-1f3fc',
    title: 'person cartwheeling: medium-light skin tone'
  },
  {
    id: 1697,
    code: '1f938-1f3fd',
    title: 'person cartwheeling: medium skin tone'
  },
  {
    id: 1698,
    code: '1f938-1f3fe',
    title: 'person cartwheeling: medium-dark skin tone'
  },
  {
    id: 1699,
    code: '1f938-1f3ff',
    title: 'person cartwheeling: dark skin tone'
  },
  { id: 1700, code: '1f938-200d-2642-fe0f', title: 'man cartwheeling' },
  {
    id: 1701,
    code: '1f938-1f3fb-200d-2642-fe0f',
    title: 'man cartwheeling: light skin tone'
  },
  {
    id: 1702,
    code: '1f938-1f3fc-200d-2642-fe0f',
    title: 'man cartwheeling: medium-light skin tone'
  },
  {
    id: 1703,
    code: '1f938-1f3fd-200d-2642-fe0f',
    title: 'man cartwheeling: medium skin tone'
  },
  {
    id: 1704,
    code: '1f938-1f3fe-200d-2642-fe0f',
    title: 'man cartwheeling: medium-dark skin tone'
  },
  {
    id: 1705,
    code: '1f938-1f3ff-200d-2642-fe0f',
    title: 'man cartwheeling: dark skin tone'
  },
  { id: 1706, code: '1f938-200d-2640-fe0f', title: 'woman cartwheeling' },
  {
    id: 1707,
    code: '1f938-1f3fb-200d-2640-fe0f',
    title: 'woman cartwheeling: light skin tone'
  },
  {
    id: 1708,
    code: '1f938-1f3fc-200d-2640-fe0f',
    title: 'woman cartwheeling: medium-light skin tone'
  },
  {
    id: 1709,
    code: '1f938-1f3fd-200d-2640-fe0f',
    title: 'woman cartwheeling: medium skin tone'
  },
  {
    id: 1710,
    code: '1f938-1f3fe-200d-2640-fe0f',
    title: 'woman cartwheeling: medium-dark skin tone'
  },
  {
    id: 1711,
    code: '1f938-1f3ff-200d-2640-fe0f',
    title: 'woman cartwheeling: dark skin tone'
  },
  { id: 1712, code: '1f93c', title: 'people wrestling' },
  { id: 1713, code: '1f93c-200d-2642-fe0f', title: 'men wrestling' },
  { id: 1714, code: '1f93c-200d-2640-fe0f', title: 'women wrestling' },
  { id: 1715, code: '1f93d', title: 'person playing water polo' },
  {
    id: 1716,
    code: '1f93d-1f3fb',
    title: 'person playing water polo: light skin tone'
  },
  {
    id: 1717,
    code: '1f93d-1f3fc',
    title: 'person playing water polo: medium-light skin tone'
  },
  {
    id: 1718,
    code: '1f93d-1f3fd',
    title: 'person playing water polo: medium skin tone'
  },
  {
    id: 1719,
    code: '1f93d-1f3fe',
    title: 'person playing water polo: medium-dark skin tone'
  },
  {
    id: 1720,
    code: '1f93d-1f3ff',
    title: 'person playing water polo: dark skin tone'
  },
  { id: 1721, code: '1f93d-200d-2642-fe0f', title: 'man playing water polo' },
  {
    id: 1722,
    code: '1f93d-1f3fb-200d-2642-fe0f',
    title: 'man playing water polo: light skin tone'
  },
  {
    id: 1723,
    code: '1f93d-1f3fc-200d-2642-fe0f',
    title: 'man playing water polo: medium-light skin tone'
  },
  {
    id: 1724,
    code: '1f93d-1f3fd-200d-2642-fe0f',
    title: 'man playing water polo: medium skin tone'
  },
  {
    id: 1725,
    code: '1f93d-1f3fe-200d-2642-fe0f',
    title: 'man playing water polo: medium-dark skin tone'
  },
  {
    id: 1726,
    code: '1f93d-1f3ff-200d-2642-fe0f',
    title: 'man playing water polo: dark skin tone'
  },
  { id: 1727, code: '1f93d-200d-2640-fe0f', title: 'woman playing water polo' },
  {
    id: 1728,
    code: '1f93d-1f3fb-200d-2640-fe0f',
    title: 'woman playing water polo: light skin tone'
  },
  {
    id: 1729,
    code: '1f93d-1f3fc-200d-2640-fe0f',
    title: 'woman playing water polo: medium-light skin tone'
  },
  {
    id: 1730,
    code: '1f93d-1f3fd-200d-2640-fe0f',
    title: 'woman playing water polo: medium skin tone'
  },
  {
    id: 1731,
    code: '1f93d-1f3fe-200d-2640-fe0f',
    title: 'woman playing water polo: medium-dark skin tone'
  },
  {
    id: 1732,
    code: '1f93d-1f3ff-200d-2640-fe0f',
    title: 'woman playing water polo: dark skin tone'
  },
  { id: 1733, code: '1f93e', title: 'person playing handball' },
  {
    id: 1734,
    code: '1f93e-1f3fb',
    title: 'person playing handball: light skin tone'
  },
  {
    id: 1735,
    code: '1f93e-1f3fc',
    title: 'person playing handball: medium-light skin tone'
  },
  {
    id: 1736,
    code: '1f93e-1f3fd',
    title: 'person playing handball: medium skin tone'
  },
  {
    id: 1737,
    code: '1f93e-1f3fe',
    title: 'person playing handball: medium-dark skin tone'
  },
  {
    id: 1738,
    code: '1f93e-1f3ff',
    title: 'person playing handball: dark skin tone'
  },
  { id: 1739, code: '1f93e-200d-2642-fe0f', title: 'man playing handball' },
  {
    id: 1740,
    code: '1f93e-1f3fb-200d-2642-fe0f',
    title: 'man playing handball: light skin tone'
  },
  {
    id: 1741,
    code: '1f93e-1f3fc-200d-2642-fe0f',
    title: 'man playing handball: medium-light skin tone'
  },
  {
    id: 1742,
    code: '1f93e-1f3fd-200d-2642-fe0f',
    title: 'man playing handball: medium skin tone'
  },
  {
    id: 1743,
    code: '1f93e-1f3fe-200d-2642-fe0f',
    title: 'man playing handball: medium-dark skin tone'
  },
  {
    id: 1744,
    code: '1f93e-1f3ff-200d-2642-fe0f',
    title: 'man playing handball: dark skin tone'
  },
  { id: 1745, code: '1f93e-200d-2640-fe0f', title: 'woman playing handball' },
  {
    id: 1746,
    code: '1f93e-1f3fb-200d-2640-fe0f',
    title: 'woman playing handball: light skin tone'
  },
  {
    id: 1747,
    code: '1f93e-1f3fc-200d-2640-fe0f',
    title: 'woman playing handball: medium-light skin tone'
  },
  {
    id: 1748,
    code: '1f93e-1f3fd-200d-2640-fe0f',
    title: 'woman playing handball: medium skin tone'
  },
  {
    id: 1749,
    code: '1f93e-1f3fe-200d-2640-fe0f',
    title: 'woman playing handball: medium-dark skin tone'
  },
  {
    id: 1750,
    code: '1f93e-1f3ff-200d-2640-fe0f',
    title: 'woman playing handball: dark skin tone'
  },
  { id: 1751, code: '1f939', title: 'person juggling' },
  { id: 1752, code: '1f939-1f3fb', title: 'person juggling: light skin tone' },
  {
    id: 1753,
    code: '1f939-1f3fc',
    title: 'person juggling: medium-light skin tone'
  },
  { id: 1754, code: '1f939-1f3fd', title: 'person juggling: medium skin tone' },
  {
    id: 1755,
    code: '1f939-1f3fe',
    title: 'person juggling: medium-dark skin tone'
  },
  { id: 1756, code: '1f939-1f3ff', title: 'person juggling: dark skin tone' },
  { id: 1757, code: '1f939-200d-2642-fe0f', title: 'man juggling' },
  {
    id: 1758,
    code: '1f939-1f3fb-200d-2642-fe0f',
    title: 'man juggling: light skin tone'
  },
  {
    id: 1759,
    code: '1f939-1f3fc-200d-2642-fe0f',
    title: 'man juggling: medium-light skin tone'
  },
  {
    id: 1760,
    code: '1f939-1f3fd-200d-2642-fe0f',
    title: 'man juggling: medium skin tone'
  },
  {
    id: 1761,
    code: '1f939-1f3fe-200d-2642-fe0f',
    title: 'man juggling: medium-dark skin tone'
  },
  {
    id: 1762,
    code: '1f939-1f3ff-200d-2642-fe0f',
    title: 'man juggling: dark skin tone'
  },
  { id: 1763, code: '1f939-200d-2640-fe0f', title: 'woman juggling' },
  {
    id: 1764,
    code: '1f939-1f3fb-200d-2640-fe0f',
    title: 'woman juggling: light skin tone'
  },
  {
    id: 1765,
    code: '1f939-1f3fc-200d-2640-fe0f',
    title: 'woman juggling: medium-light skin tone'
  },
  {
    id: 1766,
    code: '1f939-1f3fd-200d-2640-fe0f',
    title: 'woman juggling: medium skin tone'
  },
  {
    id: 1767,
    code: '1f939-1f3fe-200d-2640-fe0f',
    title: 'woman juggling: medium-dark skin tone'
  },
  {
    id: 1768,
    code: '1f939-1f3ff-200d-2640-fe0f',
    title: 'woman juggling: dark skin tone'
  },
  { id: 1769, code: '1f9d8', title: 'person in lotus position' },
  {
    id: 1770,
    code: '1f9d8-1f3fb',
    title: 'person in lotus position: light skin tone'
  },
  {
    id: 1771,
    code: '1f9d8-1f3fc',
    title: 'person in lotus position: medium-light skin tone'
  },
  {
    id: 1772,
    code: '1f9d8-1f3fd',
    title: 'person in lotus position: medium skin tone'
  },
  {
    id: 1773,
    code: '1f9d8-1f3fe',
    title: 'person in lotus position: medium-dark skin tone'
  },
  {
    id: 1774,
    code: '1f9d8-1f3ff',
    title: 'person in lotus position: dark skin tone'
  },
  { id: 1775, code: '1f9d8-200d-2642-fe0f', title: 'man in lotus position' },
  {
    id: 1776,
    code: '1f9d8-1f3fb-200d-2642-fe0f',
    title: 'man in lotus position: light skin tone'
  },
  {
    id: 1777,
    code: '1f9d8-1f3fc-200d-2642-fe0f',
    title: 'man in lotus position: medium-light skin tone'
  },
  {
    id: 1778,
    code: '1f9d8-1f3fd-200d-2642-fe0f',
    title: 'man in lotus position: medium skin tone'
  },
  {
    id: 1779,
    code: '1f9d8-1f3fe-200d-2642-fe0f',
    title: 'man in lotus position: medium-dark skin tone'
  },
  {
    id: 1780,
    code: '1f9d8-1f3ff-200d-2642-fe0f',
    title: 'man in lotus position: dark skin tone'
  },
  { id: 1781, code: '1f9d8-200d-2640-fe0f', title: 'woman in lotus position' },
  {
    id: 1782,
    code: '1f9d8-1f3fb-200d-2640-fe0f',
    title: 'woman in lotus position: light skin tone'
  },
  {
    id: 1783,
    code: '1f9d8-1f3fc-200d-2640-fe0f',
    title: 'woman in lotus position: medium-light skin tone'
  },
  {
    id: 1784,
    code: '1f9d8-1f3fd-200d-2640-fe0f',
    title: 'woman in lotus position: medium skin tone'
  },
  {
    id: 1785,
    code: '1f9d8-1f3fe-200d-2640-fe0f',
    title: 'woman in lotus position: medium-dark skin tone'
  },
  {
    id: 1786,
    code: '1f9d8-1f3ff-200d-2640-fe0f',
    title: 'woman in lotus position: dark skin tone'
  },
  { id: 1787, code: '1f6c0', title: 'person taking bath' },
  {
    id: 1788,
    code: '1f6c0-1f3fb',
    title: 'person taking bath: light skin tone'
  },
  {
    id: 1789,
    code: '1f6c0-1f3fc',
    title: 'person taking bath: medium-light skin tone'
  },
  {
    id: 1790,
    code: '1f6c0-1f3fd',
    title: 'person taking bath: medium skin tone'
  },
  {
    id: 1791,
    code: '1f6c0-1f3fe',
    title: 'person taking bath: medium-dark skin tone'
  },
  {
    id: 1792,
    code: '1f6c0-1f3ff',
    title: 'person taking bath: dark skin tone'
  },
  { id: 1793, code: '1f6cc', title: 'person in bed' },
  { id: 1794, code: '1f6cc-1f3fb', title: 'person in bed: light skin tone' },
  {
    id: 1795,
    code: '1f6cc-1f3fc',
    title: 'person in bed: medium-light skin tone'
  },
  { id: 1796, code: '1f6cc-1f3fd', title: 'person in bed: medium skin tone' },
  {
    id: 1797,
    code: '1f6cc-1f3fe',
    title: 'person in bed: medium-dark skin tone'
  },
  { id: 1798, code: '1f6cc-1f3ff', title: 'person in bed: dark skin tone' },
  {
    id: 1799,
    code: '1f9d1-200d-1f91d-200d-1f9d1',
    title: 'people holding hands'
  },
  {
    id: 1800,
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb',
    title: 'people holding hands: light skin tone'
  },
  {
    id: 1801,
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc',
    title: 'people holding hands: light skin tone, medium-light skin tone'
  },
  {
    id: 1802,
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd',
    title: 'people holding hands: light skin tone, medium skin tone'
  },
  {
    id: 1803,
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe',
    title: 'people holding hands: light skin tone, medium-dark skin tone'
  },
  {
    id: 1804,
    code: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff',
    title: 'people holding hands: light skin tone, dark skin tone'
  },
  {
    id: 1805,
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb',
    title: 'people holding hands: medium-light skin tone, light skin tone'
  },
  {
    id: 1806,
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc',
    title: 'people holding hands: medium-light skin tone'
  },
  {
    id: 1807,
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd',
    title: 'people holding hands: medium-light skin tone, medium skin tone'
  },
  {
    id: 1808,
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe',
    title: 'people holding hands: medium-light skin tone, medium-dark skin tone'
  },
  {
    id: 1809,
    code: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff',
    title: 'people holding hands: medium-light skin tone, dark skin tone'
  },
  {
    id: 1810,
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb',
    title: 'people holding hands: medium skin tone, light skin tone'
  },
  {
    id: 1811,
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc',
    title: 'people holding hands: medium skin tone, medium-light skin tone'
  },
  {
    id: 1812,
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd',
    title: 'people holding hands: medium skin tone'
  },
  {
    id: 1813,
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe',
    title: 'people holding hands: medium skin tone, medium-dark skin tone'
  },
  {
    id: 1814,
    code: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff',
    title: 'people holding hands: medium skin tone, dark skin tone'
  },
  {
    id: 1815,
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb',
    title: 'people holding hands: medium-dark skin tone, light skin tone'
  },
  {
    id: 1816,
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc',
    title: 'people holding hands: medium-dark skin tone, medium-light skin tone'
  },
  {
    id: 1817,
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd',
    title: 'people holding hands: medium-dark skin tone, medium skin tone'
  },
  {
    id: 1818,
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe',
    title: 'people holding hands: medium-dark skin tone'
  },
  {
    id: 1819,
    code: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff',
    title: 'people holding hands: medium-dark skin tone, dark skin tone'
  },
  {
    id: 1820,
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb',
    title: 'people holding hands: dark skin tone, light skin tone'
  },
  {
    id: 1821,
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc',
    title: 'people holding hands: dark skin tone, medium-light skin tone'
  },
  {
    id: 1822,
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd',
    title: 'people holding hands: dark skin tone, medium skin tone'
  },
  {
    id: 1823,
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe',
    title: 'people holding hands: dark skin tone, medium-dark skin tone'
  },
  {
    id: 1824,
    code: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff',
    title: 'people holding hands: dark skin tone'
  },
  { id: 1825, code: '1f46d', title: 'women holding hands' },
  {
    id: 1826,
    code: '1f46d-1f3fb',
    title: 'women holding hands: light skin tone'
  },
  {
    id: 1827,
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc',
    title: 'women holding hands: light skin tone, medium-light skin tone'
  },
  {
    id: 1828,
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd',
    title: 'women holding hands: light skin tone, medium skin tone'
  },
  {
    id: 1829,
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe',
    title: 'women holding hands: light skin tone, medium-dark skin tone'
  },
  {
    id: 1830,
    code: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff',
    title: 'women holding hands: light skin tone, dark skin tone'
  },
  {
    id: 1831,
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
    title: 'women holding hands: medium-light skin tone, light skin tone'
  },
  {
    id: 1832,
    code: '1f46d-1f3fc',
    title: 'women holding hands: medium-light skin tone'
  },
  {
    id: 1833,
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd',
    title: 'women holding hands: medium-light skin tone, medium skin tone'
  },
  {
    id: 1834,
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe',
    title: 'women holding hands: medium-light skin tone, medium-dark skin tone'
  },
  {
    id: 1835,
    code: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff',
    title: 'women holding hands: medium-light skin tone, dark skin tone'
  },
  {
    id: 1836,
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
    title: 'women holding hands: medium skin tone, light skin tone'
  },
  {
    id: 1837,
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
    title: 'women holding hands: medium skin tone, medium-light skin tone'
  },
  {
    id: 1838,
    code: '1f46d-1f3fd',
    title: 'women holding hands: medium skin tone'
  },
  {
    id: 1839,
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe',
    title: 'women holding hands: medium skin tone, medium-dark skin tone'
  },
  {
    id: 1840,
    code: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff',
    title: 'women holding hands: medium skin tone, dark skin tone'
  },
  {
    id: 1841,
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
    title: 'women holding hands: medium-dark skin tone, light skin tone'
  },
  {
    id: 1842,
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
    title: 'women holding hands: medium-dark skin tone, medium-light skin tone'
  },
  {
    id: 1843,
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
    title: 'women holding hands: medium-dark skin tone, medium skin tone'
  },
  {
    id: 1844,
    code: '1f46d-1f3fe',
    title: 'women holding hands: medium-dark skin tone'
  },
  {
    id: 1845,
    code: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff',
    title: 'women holding hands: medium-dark skin tone, dark skin tone'
  },
  {
    id: 1846,
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
    title: 'women holding hands: dark skin tone, light skin tone'
  },
  {
    id: 1847,
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
    title: 'women holding hands: dark skin tone, medium-light skin tone'
  },
  {
    id: 1848,
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
    title: 'women holding hands: dark skin tone, medium skin tone'
  },
  {
    id: 1849,
    code: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe',
    title: 'women holding hands: dark skin tone, medium-dark skin tone'
  },
  {
    id: 1850,
    code: '1f46d-1f3ff',
    title: 'women holding hands: dark skin tone'
  },
  { id: 1851, code: '1f46b', title: 'woman and man holding hands' },
  {
    id: 1852,
    code: '1f46b-1f3fb',
    title: 'woman and man holding hands: light skin tone'
  },
  {
    id: 1853,
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
    title:
      'woman and man holding hands: light skin tone, medium-light skin tone'
  },
  {
    id: 1854,
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
    title: 'woman and man holding hands: light skin tone, medium skin tone'
  },
  {
    id: 1855,
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
    title: 'woman and man holding hands: light skin tone, medium-dark skin tone'
  },
  {
    id: 1856,
    code: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
    title: 'woman and man holding hands: light skin tone, dark skin tone'
  },
  {
    id: 1857,
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
    title:
      'woman and man holding hands: medium-light skin tone, light skin tone'
  },
  {
    id: 1858,
    code: '1f46b-1f3fc',
    title: 'woman and man holding hands: medium-light skin tone'
  },
  {
    id: 1859,
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
    title:
      'woman and man holding hands: medium-light skin tone, medium skin tone'
  },
  {
    id: 1860,
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
    title:
      'woman and man holding hands: medium-light skin tone, medium-dark skin tone'
  },
  {
    id: 1861,
    code: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
    title: 'woman and man holding hands: medium-light skin tone, dark skin tone'
  },
  {
    id: 1862,
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
    title: 'woman and man holding hands: medium skin tone, light skin tone'
  },
  {
    id: 1863,
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
    title:
      'woman and man holding hands: medium skin tone, medium-light skin tone'
  },
  {
    id: 1864,
    code: '1f46b-1f3fd',
    title: 'woman and man holding hands: medium skin tone'
  },
  {
    id: 1865,
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
    title:
      'woman and man holding hands: medium skin tone, medium-dark skin tone'
  },
  {
    id: 1866,
    code: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
    title: 'woman and man holding hands: medium skin tone, dark skin tone'
  },
  {
    id: 1867,
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
    title: 'woman and man holding hands: medium-dark skin tone, light skin tone'
  },
  {
    id: 1868,
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
    title:
      'woman and man holding hands: medium-dark skin tone, medium-light skin tone'
  },
  {
    id: 1869,
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
    title:
      'woman and man holding hands: medium-dark skin tone, medium skin tone'
  },
  {
    id: 1870,
    code: '1f46b-1f3fe',
    title: 'woman and man holding hands: medium-dark skin tone'
  },
  {
    id: 1871,
    code: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
    title: 'woman and man holding hands: medium-dark skin tone, dark skin tone'
  },
  {
    id: 1872,
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
    title: 'woman and man holding hands: dark skin tone, light skin tone'
  },
  {
    id: 1873,
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
    title: 'woman and man holding hands: dark skin tone, medium-light skin tone'
  },
  {
    id: 1874,
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
    title: 'woman and man holding hands: dark skin tone, medium skin tone'
  },
  {
    id: 1875,
    code: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
    title: 'woman and man holding hands: dark skin tone, medium-dark skin tone'
  },
  {
    id: 1876,
    code: '1f46b-1f3ff',
    title: 'woman and man holding hands: dark skin tone'
  },
  { id: 1877, code: '1f46c', title: 'men holding hands' },
  {
    id: 1878,
    code: '1f46c-1f3fb',
    title: 'men holding hands: light skin tone'
  },
  {
    id: 1879,
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc',
    title: 'men holding hands: light skin tone, medium-light skin tone'
  },
  {
    id: 1880,
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd',
    title: 'men holding hands: light skin tone, medium skin tone'
  },
  {
    id: 1881,
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe',
    title: 'men holding hands: light skin tone, medium-dark skin tone'
  },
  {
    id: 1882,
    code: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff',
    title: 'men holding hands: light skin tone, dark skin tone'
  },
  {
    id: 1883,
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
    title: 'men holding hands: medium-light skin tone, light skin tone'
  },
  {
    id: 1884,
    code: '1f46c-1f3fc',
    title: 'men holding hands: medium-light skin tone'
  },
  {
    id: 1885,
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd',
    title: 'men holding hands: medium-light skin tone, medium skin tone'
  },
  {
    id: 1886,
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe',
    title: 'men holding hands: medium-light skin tone, medium-dark skin tone'
  },
  {
    id: 1887,
    code: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff',
    title: 'men holding hands: medium-light skin tone, dark skin tone'
  },
  {
    id: 1888,
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
    title: 'men holding hands: medium skin tone, light skin tone'
  },
  {
    id: 1889,
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
    title: 'men holding hands: medium skin tone, medium-light skin tone'
  },
  {
    id: 1890,
    code: '1f46c-1f3fd',
    title: 'men holding hands: medium skin tone'
  },
  {
    id: 1891,
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe',
    title: 'men holding hands: medium skin tone, medium-dark skin tone'
  },
  {
    id: 1892,
    code: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff',
    title: 'men holding hands: medium skin tone, dark skin tone'
  },
  {
    id: 1893,
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
    title: 'men holding hands: medium-dark skin tone, light skin tone'
  },
  {
    id: 1894,
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
    title: 'men holding hands: medium-dark skin tone, medium-light skin tone'
  },
  {
    id: 1895,
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
    title: 'men holding hands: medium-dark skin tone, medium skin tone'
  },
  {
    id: 1896,
    code: '1f46c-1f3fe',
    title: 'men holding hands: medium-dark skin tone'
  },
  {
    id: 1897,
    code: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff',
    title: 'men holding hands: medium-dark skin tone, dark skin tone'
  },
  {
    id: 1898,
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
    title: 'men holding hands: dark skin tone, light skin tone'
  },
  {
    id: 1899,
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
    title: 'men holding hands: dark skin tone, medium-light skin tone'
  },
  {
    id: 1900,
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
    title: 'men holding hands: dark skin tone, medium skin tone'
  },
  {
    id: 1901,
    code: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe',
    title: 'men holding hands: dark skin tone, medium-dark skin tone'
  },
  { id: 1902, code: '1f46c-1f3ff', title: 'men holding hands: dark skin tone' },
  { id: 1903, code: '1f48f', title: 'kiss' },
  {
    id: 1904,
    code: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
    title: 'kiss: woman, man'
  },
  {
    id: 1905,
    code: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
    title: 'kiss: man, man'
  },
  {
    id: 1906,
    code: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
    title: 'kiss: woman, woman'
  },
  { id: 1907, code: '1f491', title: 'couple with heart' },
  {
    id: 1908,
    code: '1f469-200d-2764-fe0f-200d-1f468',
    title: 'couple with heart: woman, man'
  },
  {
    id: 1909,
    code: '1f468-200d-2764-fe0f-200d-1f468',
    title: 'couple with heart: man, man'
  },
  {
    id: 1910,
    code: '1f469-200d-2764-fe0f-200d-1f469',
    title: 'couple with heart: woman, woman'
  },
  { id: 1911, code: '1f46a', title: 'family' },
  {
    id: 1912,
    code: '1f468-200d-1f469-200d-1f466',
    title: 'family: man, woman, boy'
  },
  {
    id: 1913,
    code: '1f468-200d-1f469-200d-1f467',
    title: 'family: man, woman, girl'
  },
  {
    id: 1914,
    code: '1f468-200d-1f469-200d-1f467-200d-1f466',
    title: 'family: man, woman, girl, boy'
  },
  {
    id: 1915,
    code: '1f468-200d-1f469-200d-1f466-200d-1f466',
    title: 'family: man, woman, boy, boy'
  },
  {
    id: 1916,
    code: '1f468-200d-1f469-200d-1f467-200d-1f467',
    title: 'family: man, woman, girl, girl'
  },
  {
    id: 1917,
    code: '1f468-200d-1f468-200d-1f466',
    title: 'family: man, man, boy'
  },
  {
    id: 1918,
    code: '1f468-200d-1f468-200d-1f467',
    title: 'family: man, man, girl'
  },
  {
    id: 1919,
    code: '1f468-200d-1f468-200d-1f467-200d-1f466',
    title: 'family: man, man, girl, boy'
  },
  {
    id: 1920,
    code: '1f468-200d-1f468-200d-1f466-200d-1f466',
    title: 'family: man, man, boy, boy'
  },
  {
    id: 1921,
    code: '1f468-200d-1f468-200d-1f467-200d-1f467',
    title: 'family: man, man, girl, girl'
  },
  {
    id: 1922,
    code: '1f469-200d-1f469-200d-1f466',
    title: 'family: woman, woman, boy'
  },
  {
    id: 1923,
    code: '1f469-200d-1f469-200d-1f467',
    title: 'family: woman, woman, girl'
  },
  {
    id: 1924,
    code: '1f469-200d-1f469-200d-1f467-200d-1f466',
    title: 'family: woman, woman, girl, boy'
  },
  {
    id: 1925,
    code: '1f469-200d-1f469-200d-1f466-200d-1f466',
    title: 'family: woman, woman, boy, boy'
  },
  {
    id: 1926,
    code: '1f469-200d-1f469-200d-1f467-200d-1f467',
    title: 'family: woman, woman, girl, girl'
  },
  { id: 1927, code: '1f468-200d-1f466', title: 'family: man, boy' },
  {
    id: 1928,
    code: '1f468-200d-1f466-200d-1f466',
    title: 'family: man, boy, boy'
  },
  { id: 1929, code: '1f468-200d-1f467', title: 'family: man, girl' },
  {
    id: 1930,
    code: '1f468-200d-1f467-200d-1f466',
    title: 'family: man, girl, boy'
  },
  {
    id: 1931,
    code: '1f468-200d-1f467-200d-1f467',
    title: 'family: man, girl, girl'
  },
  { id: 1932, code: '1f469-200d-1f466', title: 'family: woman, boy' },
  {
    id: 1933,
    code: '1f469-200d-1f466-200d-1f466',
    title: 'family: woman, boy, boy'
  },
  { id: 1934, code: '1f469-200d-1f467', title: 'family: woman, girl' },
  {
    id: 1935,
    code: '1f469-200d-1f467-200d-1f466',
    title: 'family: woman, girl, boy'
  },
  {
    id: 1936,
    code: '1f469-200d-1f467-200d-1f467',
    title: 'family: woman, girl, girl'
  },
  { id: 1937, code: '1f5e3', title: 'speaking head' },
  { id: 1938, code: '1f464', title: 'bust in silhouette' },
  { id: 1939, code: '1f465', title: 'busts in silhouette' },
  { id: 1940, code: '1f463', title: 'footprints' },
  { id: 1941, code: '1f3fb', title: 'light skin tone' },
  { id: 1942, code: '1f3fc', title: 'medium-light skin tone' },
  { id: 1943, code: '1f3fd', title: 'medium skin tone' },
  { id: 1944, code: '1f3fe', title: 'medium-dark skin tone' },
  { id: 1945, code: '1f3ff', title: 'dark skin tone' },
  { id: 1946, code: '1f9b0', title: 'red hair' },
  { id: 1947, code: '1f9b1', title: 'curly hair' },
  { id: 1948, code: '1f9b3', title: 'white hair' },
  { id: 1949, code: '1f9b2', title: 'bald' },
  { id: 1950, code: '1f435', title: 'monkey face' },
  { id: 1951, code: '1f412', title: 'monkey' },
  { id: 1952, code: '1f98d', title: 'gorilla' },
  { id: 1953, code: '1f9a7', title: 'orangutan' },
  { id: 1954, code: '1f436', title: 'dog face' },
  { id: 1955, code: '1f415', title: 'dog' },
  { id: 1956, code: '1f9ae', title: 'guide dog' },
  { id: 1957, code: '1f415-200d-1f9ba', title: 'service dog' },
  { id: 1958, code: '1f429', title: 'poodle' },
  { id: 1959, code: '1f43a', title: 'wolf' },
  { id: 1960, code: '1f98a', title: 'fox' },
  { id: 1961, code: '1f99d', title: 'raccoon' },
  { id: 1962, code: '1f431', title: 'cat face' },
  { id: 1963, code: '1f408', title: 'cat' },
  { id: 1964, code: '1f981', title: 'lion' },
  { id: 1965, code: '1f42f', title: 'tiger face' },
  { id: 1966, code: '1f405', title: 'tiger' },
  { id: 1967, code: '1f406', title: 'leopard' },
  { id: 1968, code: '1f434', title: 'horse face' },
  { id: 1969, code: '1f40e', title: 'horse' },
  { id: 1970, code: '1f984', title: 'unicorn' },
  { id: 1971, code: '1f993', title: 'zebra' },
  { id: 1972, code: '1f98c', title: 'deer' },
  { id: 1973, code: '1f42e', title: 'cow face' },
  { id: 1974, code: '1f402', title: 'ox' },
  { id: 1975, code: '1f403', title: 'water buffalo' },
  { id: 1976, code: '1f404', title: 'cow' },
  { id: 1977, code: '1f437', title: 'pig face' },
  { id: 1978, code: '1f416', title: 'pig' },
  { id: 1979, code: '1f417', title: 'boar' },
  { id: 1980, code: '1f43d', title: 'pig nose' },
  { id: 1981, code: '1f40f', title: 'ram' },
  { id: 1982, code: '1f411', title: 'ewe' },
  { id: 1983, code: '1f410', title: 'goat' },
  { id: 1984, code: '1f42a', title: 'camel' },
  { id: 1985, code: '1f42b', title: 'two-hump camel' },
  { id: 1986, code: '1f999', title: 'llama' },
  { id: 1987, code: '1f992', title: 'giraffe' },
  { id: 1988, code: '1f418', title: 'elephant' },
  { id: 1989, code: '1f98f', title: 'rhinoceros' },
  { id: 1990, code: '1f99b', title: 'hippopotamus' },
  { id: 1991, code: '1f42d', title: 'mouse face' },
  { id: 1992, code: '1f401', title: 'mouse' },
  { id: 1993, code: '1f400', title: 'rat' },
  { id: 1994, code: '1f439', title: 'hamster' },
  { id: 1995, code: '1f430', title: 'rabbit face' },
  { id: 1996, code: '1f407', title: 'rabbit' },
  { id: 1997, code: '1f43f', title: 'chipmunk' },
  { id: 1998, code: '1f994', title: 'hedgehog' },
  { id: 1999, code: '1f987', title: 'bat' },
  { id: 2000, code: '1f43b', title: 'bear' },
  { id: 2001, code: '1f428', title: 'koala' },
  { id: 2002, code: '1f43c', title: 'panda' },
  { id: 2003, code: '1f9a5', title: 'sloth' },
  { id: 2004, code: '1f9a6', title: 'otter' },
  { id: 2005, code: '1f9a8', title: 'skunk' },
  { id: 2006, code: '1f998', title: 'kangaroo' },
  { id: 2007, code: '1f9a1', title: 'badger' },
  { id: 2008, code: '1f43e', title: 'paw prints' },
  { id: 2009, code: '1f983', title: 'turkey' },
  { id: 2010, code: '1f414', title: 'chicken' },
  { id: 2011, code: '1f413', title: 'rooster' },
  { id: 2012, code: '1f423', title: 'hatching chick' },
  { id: 2013, code: '1f424', title: 'baby chick' },
  { id: 2014, code: '1f425', title: 'front-facing baby chick' },
  { id: 2015, code: '1f426', title: 'bird' },
  { id: 2016, code: '1f427', title: 'penguin' },
  { id: 2017, code: '1f54a', title: 'dove' },
  { id: 2018, code: '1f985', title: 'eagle' },
  { id: 2019, code: '1f986', title: 'duck' },
  { id: 2020, code: '1f9a2', title: 'swan' },
  { id: 2021, code: '1f989', title: 'owl' },
  { id: 2022, code: '1f9a9', title: 'flamingo' },
  { id: 2023, code: '1f99a', title: 'peacock' },
  { id: 2024, code: '1f99c', title: 'parrot' },
  { id: 2025, code: '1f438', title: 'frog' },
  { id: 2026, code: '1f40a', title: 'crocodile' },
  { id: 2027, code: '1f422', title: 'turtle' },
  { id: 2028, code: '1f98e', title: 'lizard' },
  { id: 2029, code: '1f40d', title: 'snake' },
  { id: 2030, code: '1f432', title: 'dragon face' },
  { id: 2031, code: '1f409', title: 'dragon' },
  { id: 2032, code: '1f995', title: 'sauropod' },
  { id: 2033, code: '1f996', title: 't-rex' },
  { id: 2034, code: '1f433', title: 'spouting whale' },
  { id: 2035, code: '1f40b', title: 'whale' },
  { id: 2036, code: '1f42c', title: 'dolphin' },
  { id: 2037, code: '1f41f', title: 'fish' },
  { id: 2038, code: '1f420', title: 'tropical fish' },
  { id: 2039, code: '1f421', title: 'blowfish' },
  { id: 2040, code: '1f988', title: 'shark' },
  { id: 2041, code: '1f419', title: 'octopus' },
  { id: 2042, code: '1f41a', title: 'spiral shell' },
  { id: 2043, code: '1f40c', title: 'snail' },
  { id: 2044, code: '1f98b', title: 'butterfly' },
  { id: 2045, code: '1f41b', title: 'bug' },
  { id: 2046, code: '1f41c', title: 'ant' },
  { id: 2047, code: '1f41d', title: 'honeybee' },
  { id: 2048, code: '1f41e', title: 'lady beetle' },
  { id: 2049, code: '1f997', title: 'cricket' },
  { id: 2050, code: '1f577', title: 'spider' },
  { id: 2051, code: '1f578', title: 'spider web' },
  { id: 2052, code: '1f982', title: 'scorpion' },
  { id: 2053, code: '1f99f', title: 'mosquito' },
  { id: 2054, code: '1f9a0', title: 'microbe' },
  { id: 2055, code: '1f490', title: 'bouquet' },
  { id: 2056, code: '1f338', title: 'cherry blossom' },
  { id: 2057, code: '1f4ae', title: 'white flower' },
  { id: 2058, code: '1f3f5', title: 'rosette' },
  { id: 2059, code: '1f339', title: 'rose' },
  { id: 2060, code: '1f940', title: 'wilted flower' },
  { id: 2061, code: '1f33a', title: 'hibiscus' },
  { id: 2062, code: '1f33b', title: 'sunflower' },
  { id: 2063, code: '1f33c', title: 'blossom' },
  { id: 2064, code: '1f337', title: 'tulip' },
  { id: 2065, code: '1f331', title: 'seedling' },
  { id: 2066, code: '1f332', title: 'evergreen tree' },
  { id: 2067, code: '1f333', title: 'deciduous tree' },
  { id: 2068, code: '1f334', title: 'palm tree' },
  { id: 2069, code: '1f335', title: 'cactus' },
  { id: 2070, code: '1f33e', title: 'sheaf of rice' },
  { id: 2071, code: '1f33f', title: 'herb' },
  { id: 2072, code: '2618', title: 'shamrock' },
  { id: 2073, code: '1f340', title: 'four leaf clover' },
  { id: 2074, code: '1f341', title: 'maple leaf' },
  { id: 2075, code: '1f342', title: 'fallen leaf' },
  { id: 2076, code: '1f343', title: 'leaf fluttering in wind' },
  { id: 2077, code: '1f347', title: 'grapes' },
  { id: 2078, code: '1f348', title: 'melon' },
  { id: 2079, code: '1f349', title: 'watermelon' },
  { id: 2080, code: '1f34a', title: 'tangerine' },
  { id: 2081, code: '1f34b', title: 'lemon' },
  { id: 2082, code: '1f34c', title: 'banana' },
  { id: 2083, code: '1f34d', title: 'pineapple' },
  { id: 2084, code: '1f96d', title: 'mango' },
  { id: 2085, code: '1f34e', title: 'red apple' },
  { id: 2086, code: '1f34f', title: 'green apple' },
  { id: 2087, code: '1f350', title: 'pear' },
  { id: 2088, code: '1f351', title: 'peach' },
  { id: 2089, code: '1f352', title: 'cherries' },
  { id: 2090, code: '1f353', title: 'strawberry' },
  { id: 2091, code: '1f95d', title: 'kiwi fruit' },
  { id: 2092, code: '1f345', title: 'tomato' },
  { id: 2093, code: '1f965', title: 'coconut' },
  { id: 2094, code: '1f951', title: 'avocado' },
  { id: 2095, code: '1f346', title: 'eggplant' },
  { id: 2096, code: '1f954', title: 'potato' },
  { id: 2097, code: '1f955', title: 'carrot' },
  { id: 2098, code: '1f33d', title: 'ear of corn' },
  { id: 2099, code: '1f336', title: 'hot pepper' },
  { id: 2100, code: '1f952', title: 'cucumber' },
  { id: 2101, code: '1f96c', title: 'leafy green' },
  { id: 2102, code: '1f966', title: 'broccoli' },
  { id: 2103, code: '1f9c4', title: 'garlic' },
  { id: 2104, code: '1f9c5', title: 'onion' },
  { id: 2105, code: '1f344', title: 'mushroom' },
  { id: 2106, code: '1f95c', title: 'peanuts' },
  { id: 2107, code: '1f330', title: 'chestnut' },
  { id: 2108, code: '1f35e', title: 'bread' },
  { id: 2109, code: '1f950', title: 'croissant' },
  { id: 2110, code: '1f956', title: 'baguette bread' },
  { id: 2111, code: '1f968', title: 'pretzel' },
  { id: 2112, code: '1f96f', title: 'bagel' },
  { id: 2113, code: '1f95e', title: 'pancakes' },
  { id: 2114, code: '1f9c7', title: 'waffle' },
  { id: 2115, code: '1f9c0', title: 'cheese wedge' },
  { id: 2116, code: '1f356', title: 'meat on bone' },
  { id: 2117, code: '1f357', title: 'poultry leg' },
  { id: 2118, code: '1f969', title: 'cut of meat' },
  { id: 2119, code: '1f953', title: 'bacon' },
  { id: 2120, code: '1f354', title: 'hamburger' },
  { id: 2121, code: '1f35f', title: 'french fries' },
  { id: 2122, code: '1f355', title: 'pizza' },
  { id: 2123, code: '1f32d', title: 'hot dog' },
  { id: 2124, code: '1f96a', title: 'sandwich' },
  { id: 2125, code: '1f32e', title: 'taco' },
  { id: 2126, code: '1f32f', title: 'burrito' },
  { id: 2127, code: '1f959', title: 'stuffed flatbread' },
  { id: 2128, code: '1f9c6', title: 'falafel' },
  { id: 2129, code: '1f95a', title: 'egg' },
  { id: 2130, code: '1f373', title: 'cooking' },
  { id: 2131, code: '1f958', title: 'shallow pan of food' },
  { id: 2132, code: '1f372', title: 'pot of food' },
  { id: 2133, code: '1f963', title: 'bowl with spoon' },
  { id: 2134, code: '1f957', title: 'green salad' },
  { id: 2135, code: '1f37f', title: 'popcorn' },
  { id: 2136, code: '1f9c8', title: 'butter' },
  { id: 2137, code: '1f9c2', title: 'salt' },
  { id: 2138, code: '1f96b', title: 'canned food' },
  { id: 2139, code: '1f371', title: 'bento box' },
  { id: 2140, code: '1f358', title: 'rice cracker' },
  { id: 2141, code: '1f359', title: 'rice ball' },
  { id: 2142, code: '1f35a', title: 'cooked rice' },
  { id: 2143, code: '1f35b', title: 'curry rice' },
  { id: 2144, code: '1f35c', title: 'steaming bowl' },
  { id: 2145, code: '1f35d', title: 'spaghetti' },
  { id: 2146, code: '1f360', title: 'roasted sweet potato' },
  { id: 2147, code: '1f362', title: 'oden' },
  { id: 2148, code: '1f363', title: 'sushi' },
  { id: 2149, code: '1f364', title: 'fried shrimp' },
  { id: 2150, code: '1f365', title: 'fish cake with swirl' },
  { id: 2151, code: '1f96e', title: 'moon cake' },
  { id: 2152, code: '1f361', title: 'dango' },
  { id: 2153, code: '1f95f', title: 'dumpling' },
  { id: 2154, code: '1f960', title: 'fortune cookie' },
  { id: 2155, code: '1f961', title: 'takeout box' },
  { id: 2156, code: '1f980', title: 'crab' },
  { id: 2157, code: '1f99e', title: 'lobster' },
  { id: 2158, code: '1f990', title: 'shrimp' },
  { id: 2159, code: '1f991', title: 'squid' },
  { id: 2160, code: '1f9aa', title: 'oyster' },
  { id: 2161, code: '1f366', title: 'soft ice cream' },
  { id: 2162, code: '1f367', title: 'shaved ice' },
  { id: 2163, code: '1f368', title: 'ice cream' },
  { id: 2164, code: '1f369', title: 'doughnut' },
  { id: 2165, code: '1f36a', title: 'cookie' },
  { id: 2166, code: '1f382', title: 'birthday cake' },
  { id: 2167, code: '1f370', title: 'shortcake' },
  { id: 2168, code: '1f9c1', title: 'cupcake' },
  { id: 2169, code: '1f967', title: 'pie' },
  { id: 2170, code: '1f36b', title: 'chocolate bar' },
  { id: 2171, code: '1f36c', title: 'candy' },
  { id: 2172, code: '1f36d', title: 'lollipop' },
  { id: 2173, code: '1f36e', title: 'custard' },
  { id: 2174, code: '1f36f', title: 'honey pot' },
  { id: 2175, code: '1f37c', title: 'baby bottle' },
  { id: 2176, code: '1f95b', title: 'glass of milk' },
  { id: 2177, code: '2615', title: 'hot beverage' },
  { id: 2178, code: '1f375', title: 'teacup without handle' },
  { id: 2179, code: '1f376', title: 'sake' },
  { id: 2180, code: '1f37e', title: 'bottle with popping cork' },
  { id: 2181, code: '1f377', title: 'wine glass' },
  { id: 2182, code: '1f378', title: 'cocktail glass' },
  { id: 2183, code: '1f379', title: 'tropical drink' },
  { id: 2184, code: '1f37a', title: 'beer mug' },
  { id: 2185, code: '1f37b', title: 'clinking beer mugs' },
  { id: 2186, code: '1f942', title: 'clinking glasses' },
  { id: 2187, code: '1f943', title: 'tumbler glass' },
  { id: 2188, code: '1f964', title: 'cup with straw' },
  { id: 2189, code: '1f9c3', title: 'beverage box' },
  { id: 2190, code: '1f9c9', title: 'mate' },
  { id: 2191, code: '1f9ca', title: 'ice' },
  { id: 2192, code: '1f962', title: 'chopsticks' },
  { id: 2193, code: '1f37d', title: 'fork and knife with plate' },
  { id: 2194, code: '1f374', title: 'fork and knife' },
  { id: 2195, code: '1f944', title: 'spoon' },
  { id: 2196, code: '1f52a', title: 'kitchen knife' },
  { id: 2197, code: '1f3fa', title: 'amphora' },
  { id: 2198, code: '1f30d', title: 'globe showing europe-africa' },
  { id: 2199, code: '1f30e', title: 'globe showing americas' },
  { id: 2200, code: '1f30f', title: 'globe showing asia-australia' },
  { id: 2201, code: '1f310', title: 'globe with meridians' },
  { id: 2202, code: '1f5fa', title: 'world map' },
  { id: 2203, code: '1f5fe', title: 'map of japan' },
  { id: 2204, code: '1f9ed', title: 'compass' },
  { id: 2205, code: '1f3d4', title: 'snow-capped mountain' },
  { id: 2206, code: '26f0', title: 'mountain' },
  { id: 2207, code: '1f30b', title: 'volcano' },
  { id: 2208, code: '1f5fb', title: 'mount fuji' },
  { id: 2209, code: '1f3d5', title: 'camping' },
  { id: 2210, code: '1f3d6', title: 'beach with umbrella' },
  { id: 2211, code: '1f3dc', title: 'desert' },
  { id: 2212, code: '1f3dd', title: 'desert island' },
  { id: 2213, code: '1f3de', title: 'national park' },
  { id: 2214, code: '1f3df', title: 'stadium' },
  { id: 2215, code: '1f3db', title: 'classical building' },
  { id: 2216, code: '1f3d7', title: 'building construction' },
  { id: 2217, code: '1f9f1', title: 'brick' },
  { id: 2218, code: '1f3d8', title: 'houses' },
  { id: 2219, code: '1f3da', title: 'derelict house' },
  { id: 2220, code: '1f3e0', title: 'house' },
  { id: 2221, code: '1f3e1', title: 'house with garden' },
  { id: 2222, code: '1f3e2', title: 'office building' },
  { id: 2223, code: '1f3e3', title: 'japanese post office' },
  { id: 2224, code: '1f3e4', title: 'post office' },
  { id: 2225, code: '1f3e5', title: 'hospital' },
  { id: 2226, code: '1f3e6', title: 'bank' },
  { id: 2227, code: '1f3e8', title: 'hotel' },
  { id: 2228, code: '1f3e9', title: 'love hotel' },
  { id: 2229, code: '1f3ea', title: 'convenience store' },
  { id: 2230, code: '1f3eb', title: 'school' },
  { id: 2231, code: '1f3ec', title: 'department store' },
  { id: 2232, code: '1f3ed', title: 'factory' },
  { id: 2233, code: '1f3ef', title: 'japanese castle' },
  { id: 2234, code: '1f3f0', title: 'castle' },
  { id: 2235, code: '1f492', title: 'wedding' },
  { id: 2236, code: '1f5fc', title: 'tokyo tower' },
  { id: 2237, code: '1f5fd', title: 'statue of liberty' },
  { id: 2238, code: '26ea', title: 'church' },
  { id: 2239, code: '1f54c', title: 'mosque' },
  { id: 2240, code: '1f6d5', title: 'hindu temple' },
  { id: 2241, code: '1f54d', title: 'synagogue' },
  { id: 2242, code: '26e9', title: 'shinto shrine' },
  { id: 2243, code: '1f54b', title: 'kaaba' },
  { id: 2244, code: '26f2', title: 'fountain' },
  { id: 2245, code: '26fa', title: 'tent' },
  { id: 2246, code: '1f301', title: 'foggy' },
  { id: 2247, code: '1f303', title: 'night with stars' },
  { id: 2248, code: '1f3d9', title: 'cityscape' },
  { id: 2249, code: '1f304', title: 'sunrise over mountains' },
  { id: 2250, code: '1f305', title: 'sunrise' },
  { id: 2251, code: '1f306', title: 'cityscape at dusk' },
  { id: 2252, code: '1f307', title: 'sunset' },
  { id: 2253, code: '1f309', title: 'bridge at night' },
  { id: 2254, code: '2668', title: 'hot springs' },
  { id: 2255, code: '1f3a0', title: 'carousel horse' },
  { id: 2256, code: '1f3a1', title: 'ferris wheel' },
  { id: 2257, code: '1f3a2', title: 'roller coaster' },
  { id: 2258, code: '1f488', title: 'barber pole' },
  { id: 2259, code: '1f3aa', title: 'circus tent' },
  { id: 2260, code: '1f682', title: 'locomotive' },
  { id: 2261, code: '1f683', title: 'railway car' },
  { id: 2262, code: '1f684', title: 'high-speed train' },
  { id: 2263, code: '1f685', title: 'bullet train' },
  { id: 2264, code: '1f686', title: 'train' },
  { id: 2265, code: '1f687', title: 'metro' },
  { id: 2266, code: '1f688', title: 'light rail' },
  { id: 2267, code: '1f689', title: 'station' },
  { id: 2268, code: '1f68a', title: 'tram' },
  { id: 2269, code: '1f69d', title: 'monorail' },
  { id: 2270, code: '1f69e', title: 'mountain railway' },
  { id: 2271, code: '1f68b', title: 'tram car' },
  { id: 2272, code: '1f68c', title: 'bus' },
  { id: 2273, code: '1f68d', title: 'oncoming bus' },
  { id: 2274, code: '1f68e', title: 'trolleybus' },
  { id: 2275, code: '1f690', title: 'minibus' },
  { id: 2276, code: '1f691', title: 'ambulance' },
  { id: 2277, code: '1f692', title: 'fire engine' },
  { id: 2278, code: '1f693', title: 'police car' },
  { id: 2279, code: '1f694', title: 'oncoming police car' },
  { id: 2280, code: '1f695', title: 'taxi' },
  { id: 2281, code: '1f696', title: 'oncoming taxi' },
  { id: 2282, code: '1f697', title: 'automobile' },
  { id: 2283, code: '1f698', title: 'oncoming automobile' },
  { id: 2284, code: '1f699', title: 'sport utility vehicle' },
  { id: 2285, code: '1f69a', title: 'delivery truck' },
  { id: 2286, code: '1f69b', title: 'articulated lorry' },
  { id: 2287, code: '1f69c', title: 'tractor' },
  { id: 2288, code: '1f3ce', title: 'racing car' },
  { id: 2289, code: '1f3cd', title: 'motorcycle' },
  { id: 2290, code: '1f6f5', title: 'motor scooter' },
  { id: 2291, code: '1f9bd', title: 'manual wheelchair' },
  { id: 2292, code: '1f9bc', title: 'motorized wheelchair' },
  { id: 2293, code: '1f6fa', title: 'auto rickshaw' },
  { id: 2294, code: '1f6b2', title: 'bicycle' },
  { id: 2295, code: '1f6f4', title: 'kick scooter' },
  { id: 2296, code: '1f6f9', title: 'skateboard' },
  { id: 2297, code: '1f68f', title: 'bus stop' },
  { id: 2298, code: '1f6e3', title: 'motorway' },
  { id: 2299, code: '1f6e4', title: 'railway track' },
  { id: 2300, code: '1f6e2', title: 'oil drum' },
  { id: 2301, code: '26fd', title: 'fuel pump' },
  { id: 2302, code: '1f6a8', title: 'police car light' },
  { id: 2303, code: '1f6a5', title: 'horizontal traffic light' },
  { id: 2304, code: '1f6a6', title: 'vertical traffic light' },
  { id: 2305, code: '1f6d1', title: 'stop sign' },
  { id: 2306, code: '1f6a7', title: 'construction' },
  { id: 2307, code: '2693', title: 'anchor' },
  { id: 2308, code: '26f5', title: 'sailboat' },
  { id: 2309, code: '1f6f6', title: 'canoe' },
  { id: 2310, code: '1f6a4', title: 'speedboat' },
  { id: 2311, code: '1f6f3', title: 'passenger ship' },
  { id: 2312, code: '26f4', title: 'ferry' },
  { id: 2313, code: '1f6e5', title: 'motor boat' },
  { id: 2314, code: '1f6a2', title: 'ship' },
  { id: 2315, code: '2708', title: 'airplane' },
  { id: 2316, code: '1f6e9', title: 'small airplane' },
  { id: 2317, code: '1f6eb', title: 'airplane departure' },
  { id: 2318, code: '1f6ec', title: 'airplane arrival' },
  { id: 2319, code: '1fa82', title: 'parachute' },
  { id: 2320, code: '1f4ba', title: 'seat' },
  { id: 2321, code: '1f681', title: 'helicopter' },
  { id: 2322, code: '1f69f', title: 'suspension railway' },
  { id: 2323, code: '1f6a0', title: 'mountain cableway' },
  { id: 2324, code: '1f6a1', title: 'aerial tramway' },
  { id: 2325, code: '1f6f0', title: 'satellite' },
  { id: 2326, code: '1f680', title: 'rocket' },
  { id: 2327, code: '1f6f8', title: 'flying saucer' },
  { id: 2328, code: '1f6ce', title: 'bellhop bell' },
  { id: 2329, code: '1f9f3', title: 'luggage' },
  { id: 2330, code: '231b', title: 'hourglass done' },
  { id: 2331, code: '23f3', title: 'hourglass not done' },
  { id: 2332, code: '231a', title: 'watch' },
  { id: 2333, code: '23f0', title: 'alarm clock' },
  { id: 2334, code: '23f1', title: 'stopwatch' },
  { id: 2335, code: '23f2', title: 'timer clock' },
  { id: 2336, code: '1f570', title: 'mantelpiece clock' },
  { id: 2337, code: '1f55b', title: 'twelve o’clock' },
  { id: 2338, code: '1f567', title: 'twelve-thirty' },
  { id: 2339, code: '1f550', title: 'one o’clock' },
  { id: 2340, code: '1f55c', title: 'one-thirty' },
  { id: 2341, code: '1f551', title: 'two o’clock' },
  { id: 2342, code: '1f55d', title: 'two-thirty' },
  { id: 2343, code: '1f552', title: 'three o’clock' },
  { id: 2344, code: '1f55e', title: 'three-thirty' },
  { id: 2345, code: '1f553', title: 'four o’clock' },
  { id: 2346, code: '1f55f', title: 'four-thirty' },
  { id: 2347, code: '1f554', title: 'five o’clock' },
  { id: 2348, code: '1f560', title: 'five-thirty' },
  { id: 2349, code: '1f555', title: 'six o’clock' },
  { id: 2350, code: '1f561', title: 'six-thirty' },
  { id: 2351, code: '1f556', title: 'seven o’clock' },
  { id: 2352, code: '1f562', title: 'seven-thirty' },
  { id: 2353, code: '1f557', title: 'eight o’clock' },
  { id: 2354, code: '1f563', title: 'eight-thirty' },
  { id: 2355, code: '1f558', title: 'nine o’clock' },
  { id: 2356, code: '1f564', title: 'nine-thirty' },
  { id: 2357, code: '1f559', title: 'ten o’clock' },
  { id: 2358, code: '1f565', title: 'ten-thirty' },
  { id: 2359, code: '1f55a', title: 'eleven o’clock' },
  { id: 2360, code: '1f566', title: 'eleven-thirty' },
  { id: 2361, code: '1f311', title: 'new moon' },
  { id: 2362, code: '1f312', title: 'waxing crescent moon' },
  { id: 2363, code: '1f313', title: 'first quarter moon' },
  { id: 2364, code: '1f314', title: 'waxing gibbous moon' },
  { id: 2365, code: '1f315', title: 'full moon' },
  { id: 2366, code: '1f316', title: 'waning gibbous moon' },
  { id: 2367, code: '1f317', title: 'last quarter moon' },
  { id: 2368, code: '1f318', title: 'waning crescent moon' },
  { id: 2369, code: '1f319', title: 'crescent moon' },
  { id: 2370, code: '1f31a', title: 'new moon face' },
  { id: 2371, code: '1f31b', title: 'first quarter moon face' },
  { id: 2372, code: '1f31c', title: 'last quarter moon face' },
  { id: 2373, code: '1f321', title: 'thermometer' },
  { id: 2374, code: '2600', title: 'sun' },
  { id: 2375, code: '1f31d', title: 'full moon face' },
  { id: 2376, code: '1f31e', title: 'sun with face' },
  { id: 2377, code: '1fa90', title: 'ringed planet' },
  { id: 2378, code: '2b50', title: 'star' },
  { id: 2379, code: '1f31f', title: 'glowing star' },
  { id: 2380, code: '1f320', title: 'shooting star' },
  { id: 2381, code: '1f30c', title: 'milky way' },
  { id: 2382, code: '2601', title: 'cloud' },
  { id: 2383, code: '26c5', title: 'sun behind cloud' },
  { id: 2384, code: '26c8', title: 'cloud with lightning and rain' },
  { id: 2385, code: '1f324', title: 'sun behind small cloud' },
  { id: 2386, code: '1f325', title: 'sun behind large cloud' },
  { id: 2387, code: '1f326', title: 'sun behind rain cloud' },
  { id: 2388, code: '1f327', title: 'cloud with rain' },
  { id: 2389, code: '1f328', title: 'cloud with snow' },
  { id: 2390, code: '1f329', title: 'cloud with lightning' },
  { id: 2391, code: '1f32a', title: 'tornado' },
  { id: 2392, code: '1f32b', title: 'fog' },
  { id: 2393, code: '1f32c', title: 'wind face' },
  { id: 2394, code: '1f300', title: 'cyclone' },
  { id: 2395, code: '1f308', title: 'rainbow' },
  { id: 2396, code: '1f302', title: 'closed umbrella' },
  { id: 2397, code: '2602', title: 'umbrella' },
  { id: 2398, code: '2614', title: 'umbrella with rain drops' },
  { id: 2399, code: '26f1', title: 'umbrella on ground' },
  { id: 2400, code: '26a1', title: 'high voltage' },
  { id: 2401, code: '2744', title: 'snowflake' },
  { id: 2402, code: '2603', title: 'snowman' },
  { id: 2403, code: '26c4', title: 'snowman without snow' },
  { id: 2404, code: '2604', title: 'comet' },
  { id: 2405, code: '1f525', title: 'fire' },
  { id: 2406, code: '1f4a7', title: 'droplet' },
  { id: 2407, code: '1f30a', title: 'water wave' },
  { id: 2408, code: '1f383', title: 'jack-o-lantern' },
  { id: 2409, code: '1f384', title: 'christmas tree' },
  { id: 2410, code: '1f386', title: 'fireworks' },
  { id: 2411, code: '1f387', title: 'sparkler' },
  { id: 2412, code: '1f9e8', title: 'firecracker' },
  { id: 2413, code: '2728', title: 'sparkles' },
  { id: 2414, code: '1f388', title: 'balloon' },
  { id: 2415, code: '1f389', title: 'party popper' },
  { id: 2416, code: '1f38a', title: 'confetti ball' },
  { id: 2417, code: '1f38b', title: 'tanabata tree' },
  { id: 2418, code: '1f38d', title: 'pine decoration' },
  { id: 2419, code: '1f38e', title: 'japanese dolls' },
  { id: 2420, code: '1f38f', title: 'carp streamer' },
  { id: 2421, code: '1f390', title: 'wind chime' },
  { id: 2422, code: '1f391', title: 'moon viewing ceremony' },
  { id: 2423, code: '1f9e7', title: 'red envelope' },
  { id: 2424, code: '1f380', title: 'ribbon' },
  { id: 2425, code: '1f381', title: 'wrapped gift' },
  { id: 2426, code: '1f397', title: 'reminder ribbon' },
  { id: 2427, code: '1f39f', title: 'admission tickets' },
  { id: 2428, code: '1f3ab', title: 'ticket' },
  { id: 2429, code: '1f396', title: 'military medal' },
  { id: 2430, code: '1f3c6', title: 'trophy' },
  { id: 2431, code: '1f3c5', title: 'sports medal' },
  { id: 2432, code: '1f947', title: '1st place medal' },
  { id: 2433, code: '1f948', title: '2nd place medal' },
  { id: 2434, code: '1f949', title: '3rd place medal' },
  { id: 2435, code: '26bd', title: 'soccer ball' },
  { id: 2436, code: '26be', title: 'baseball' },
  { id: 2437, code: '1f94e', title: 'softball' },
  { id: 2438, code: '1f3c0', title: 'basketball' },
  { id: 2439, code: '1f3d0', title: 'volleyball' },
  { id: 2440, code: '1f3c8', title: 'american football' },
  { id: 2441, code: '1f3c9', title: 'rugby football' },
  { id: 2442, code: '1f3be', title: 'tennis' },
  { id: 2443, code: '1f94f', title: 'flying disc' },
  { id: 2444, code: '1f3b3', title: 'bowling' },
  { id: 2445, code: '1f3cf', title: 'cricket game' },
  { id: 2446, code: '1f3d1', title: 'field hockey' },
  { id: 2447, code: '1f3d2', title: 'ice hockey' },
  { id: 2448, code: '1f94d', title: 'lacrosse' },
  { id: 2449, code: '1f3d3', title: 'ping pong' },
  { id: 2450, code: '1f3f8', title: 'badminton' },
  { id: 2451, code: '1f94a', title: 'boxing glove' },
  { id: 2452, code: '1f94b', title: 'martial arts uniform' },
  { id: 2453, code: '1f945', title: 'goal net' },
  { id: 2454, code: '26f3', title: 'flag in hole' },
  { id: 2455, code: '26f8', title: 'ice skate' },
  { id: 2456, code: '1f3a3', title: 'fishing pole' },
  { id: 2457, code: '1f93f', title: 'diving mask' },
  { id: 2458, code: '1f3bd', title: 'running shirt' },
  { id: 2459, code: '1f3bf', title: 'skis' },
  { id: 2460, code: '1f6f7', title: 'sled' },
  { id: 2461, code: '1f94c', title: 'curling stone' },
  { id: 2462, code: '1f3af', title: 'direct hit' },
  { id: 2463, code: '1fa80', title: 'yo-yo' },
  { id: 2464, code: '1fa81', title: 'kite' },
  { id: 2465, code: '1f3b1', title: 'pool 8 ball' },
  { id: 2466, code: '1f52e', title: 'crystal ball' },
  { id: 2467, code: '1f9ff', title: 'nazar amulet' },
  { id: 2468, code: '1f3ae', title: 'video game' },
  { id: 2469, code: '1f579', title: 'joystick' },
  { id: 2470, code: '1f3b0', title: 'slot machine' },
  { id: 2471, code: '1f3b2', title: 'game die' },
  { id: 2472, code: '1f9e9', title: 'puzzle piece' },
  { id: 2473, code: '1f9f8', title: 'teddy bear' },
  { id: 2474, code: '2660', title: 'spade suit' },
  { id: 2475, code: '2665', title: 'heart suit' },
  { id: 2476, code: '2666', title: 'diamond suit' },
  { id: 2477, code: '2663', title: 'club suit' },
  { id: 2478, code: '265f', title: 'chess pawn' },
  { id: 2479, code: '1f0cf', title: 'joker' },
  { id: 2480, code: '1f004', title: 'mahjong red dragon' },
  { id: 2481, code: '1f3b4', title: 'flower playing cards' },
  { id: 2482, code: '1f3ad', title: 'performing arts' },
  { id: 2483, code: '1f5bc', title: 'framed picture' },
  { id: 2484, code: '1f3a8', title: 'artist palette' },
  { id: 2485, code: '1f9f5', title: 'thread' },
  { id: 2486, code: '1f9f6', title: 'yarn' },
  { id: 2487, code: '1f453', title: 'glasses' },
  { id: 2488, code: '1f576', title: 'sunglasses' },
  { id: 2489, code: '1f97d', title: 'goggles' },
  { id: 2490, code: '1f97c', title: 'lab coat' },
  { id: 2491, code: '1f9ba', title: 'safety vest' },
  { id: 2492, code: '1f454', title: 'necktie' },
  { id: 2493, code: '1f455', title: 't-shirt' },
  { id: 2494, code: '1f456', title: 'jeans' },
  { id: 2495, code: '1f9e3', title: 'scarf' },
  { id: 2496, code: '1f9e4', title: 'gloves' },
  { id: 2497, code: '1f9e5', title: 'coat' },
  { id: 2498, code: '1f9e6', title: 'socks' },
  { id: 2499, code: '1f457', title: 'dress' },
  { id: 2500, code: '1f458', title: 'kimono' },
  { id: 2501, code: '1f97b', title: 'sari' },
  { id: 2502, code: '1fa71', title: 'one-piece swimsuit' },
  { id: 2503, code: '1fa72', title: 'briefs' },
  { id: 2504, code: '1fa73', title: 'shorts' },
  { id: 2505, code: '1f459', title: 'bikini' },
  { id: 2506, code: '1f45a', title: 'woman’s clothes' },
  { id: 2507, code: '1f45b', title: 'purse' },
  { id: 2508, code: '1f45c', title: 'handbag' },
  { id: 2509, code: '1f45d', title: 'clutch bag' },
  { id: 2510, code: '1f6cd', title: 'shopping bags' },
  { id: 2511, code: '1f392', title: 'backpack' },
  { id: 2512, code: '1f45e', title: 'man’s shoe' },
  { id: 2513, code: '1f45f', title: 'running shoe' },
  { id: 2514, code: '1f97e', title: 'hiking boot' },
  { id: 2515, code: '1f97f', title: 'flat shoe' },
  { id: 2516, code: '1f460', title: 'high-heeled shoe' },
  { id: 2517, code: '1f461', title: 'woman’s sandal' },
  { id: 2518, code: '1fa70', title: 'ballet shoes' },
  { id: 2519, code: '1f462', title: 'woman’s boot' },
  { id: 2520, code: '1f451', title: 'crown' },
  { id: 2521, code: '1f452', title: 'woman’s hat' },
  { id: 2522, code: '1f3a9', title: 'top hat' },
  { id: 2523, code: '1f393', title: 'graduation cap' },
  { id: 2524, code: '1f9e2', title: 'billed cap' },
  { id: 2525, code: '26d1', title: 'rescue worker’s helmet' },
  { id: 2526, code: '1f4ff', title: 'prayer beads' },
  { id: 2527, code: '1f484', title: 'lipstick' },
  { id: 2528, code: '1f48d', title: 'ring' },
  { id: 2529, code: '1f48e', title: 'gem stone' },
  { id: 2530, code: '1f507', title: 'muted speaker' },
  { id: 2531, code: '1f508', title: 'speaker low volume' },
  { id: 2532, code: '1f509', title: 'speaker medium volume' },
  { id: 2533, code: '1f50a', title: 'speaker high volume' },
  { id: 2534, code: '1f4e2', title: 'loudspeaker' },
  { id: 2535, code: '1f4e3', title: 'megaphone' },
  { id: 2536, code: '1f4ef', title: 'postal horn' },
  { id: 2537, code: '1f514', title: 'bell' },
  { id: 2538, code: '1f515', title: 'bell with slash' },
  { id: 2539, code: '1f3bc', title: 'musical score' },
  { id: 2540, code: '1f3b5', title: 'musical note' },
  { id: 2541, code: '1f3b6', title: 'musical notes' },
  { id: 2542, code: '1f399', title: 'studio microphone' },
  { id: 2543, code: '1f39a', title: 'level slider' },
  { id: 2544, code: '1f39b', title: 'control knobs' },
  { id: 2545, code: '1f3a4', title: 'microphone' },
  { id: 2546, code: '1f3a7', title: 'headphone' },
  { id: 2547, code: '1f4fb', title: 'radio' },
  { id: 2548, code: '1f3b7', title: 'saxophone' },
  { id: 2549, code: '1f3b8', title: 'guitar' },
  { id: 2550, code: '1f3b9', title: 'musical keyboard' },
  { id: 2551, code: '1f3ba', title: 'trumpet' },
  { id: 2552, code: '1f3bb', title: 'violin' },
  { id: 2553, code: '1fa95', title: 'banjo' },
  { id: 2554, code: '1f941', title: 'drum' },
  { id: 2555, code: '1f4f1', title: 'mobile phone' },
  { id: 2556, code: '1f4f2', title: 'mobile phone with arrow' },
  { id: 2557, code: '260e', title: 'telephone' },
  { id: 2558, code: '1f4de', title: 'telephone receiver' },
  { id: 2559, code: '1f4df', title: 'pager' },
  { id: 2560, code: '1f4e0', title: 'fax machine' },
  { id: 2561, code: '1f50b', title: 'battery' },
  { id: 2562, code: '1f50c', title: 'electric plug' },
  { id: 2563, code: '1f4bb', title: 'laptop' },
  { id: 2564, code: '1f5a5', title: 'desktop computer' },
  { id: 2565, code: '1f5a8', title: 'printer' },
  { id: 2566, code: '2328', title: 'keyboard' },
  { id: 2567, code: '1f5b1', title: 'computer mouse' },
  { id: 2568, code: '1f5b2', title: 'trackball' },
  { id: 2569, code: '1f4bd', title: 'computer disk' },
  { id: 2570, code: '1f4be', title: 'floppy disk' },
  { id: 2571, code: '1f4bf', title: 'optical disk' },
  { id: 2572, code: '1f4c0', title: 'dvd' },
  { id: 2573, code: '1f9ee', title: 'abacus' },
  { id: 2574, code: '1f3a5', title: 'movie camera' },
  { id: 2575, code: '1f39e', title: 'film frames' },
  { id: 2576, code: '1f4fd', title: 'film projector' },
  { id: 2577, code: '1f3ac', title: 'clapper board' },
  { id: 2578, code: '1f4fa', title: 'television' },
  { id: 2579, code: '1f4f7', title: 'camera' },
  { id: 2580, code: '1f4f8', title: 'camera with flash' },
  { id: 2581, code: '1f4f9', title: 'video camera' },
  { id: 2582, code: '1f4fc', title: 'videocassette' },
  { id: 2583, code: '1f50d', title: 'magnifying glass tilted left' },
  { id: 2584, code: '1f50e', title: 'magnifying glass tilted right' },
  { id: 2585, code: '1f56f', title: 'candle' },
  { id: 2586, code: '1f4a1', title: 'light bulb' },
  { id: 2587, code: '1f526', title: 'flashlight' },
  { id: 2588, code: '1f3ee', title: 'red paper lantern' },
  { id: 2589, code: '1fa94', title: 'diya lamp' },
  { id: 2590, code: '1f4d4', title: 'notebook with decorative cover' },
  { id: 2591, code: '1f4d5', title: 'closed book' },
  { id: 2592, code: '1f4d6', title: 'open book' },
  { id: 2593, code: '1f4d7', title: 'green book' },
  { id: 2594, code: '1f4d8', title: 'blue book' },
  { id: 2595, code: '1f4d9', title: 'orange book' },
  { id: 2596, code: '1f4da', title: 'books' },
  { id: 2597, code: '1f4d3', title: 'notebook' },
  { id: 2598, code: '1f4d2', title: 'ledger' },
  { id: 2599, code: '1f4c3', title: 'page with curl' },
  { id: 2600, code: '1f4dc', title: 'scroll' },
  { id: 2601, code: '1f4c4', title: 'page facing up' },
  { id: 2602, code: '1f4f0', title: 'newspaper' },
  { id: 2603, code: '1f5de', title: 'rolled-up newspaper' },
  { id: 2604, code: '1f4d1', title: 'bookmark tabs' },
  { id: 2605, code: '1f516', title: 'bookmark' },
  { id: 2606, code: '1f3f7', title: 'label' },
  { id: 2607, code: '1f4b0', title: 'money bag' },
  { id: 2608, code: '1f4b4', title: 'yen banknote' },
  { id: 2609, code: '1f4b5', title: 'dollar banknote' },
  { id: 2610, code: '1f4b6', title: 'euro banknote' },
  { id: 2611, code: '1f4b7', title: 'pound banknote' },
  { id: 2612, code: '1f4b8', title: 'money with wings' },
  { id: 2613, code: '1f4b3', title: 'credit card' },
  { id: 2614, code: '1f9fe', title: 'receipt' },
  { id: 2615, code: '1f4b9', title: 'chart increasing with yen' },
  { id: 2616, code: '2709', title: 'envelope' },
  { id: 2617, code: '1f4e7', title: 'e-mail' },
  { id: 2618, code: '1f4e8', title: 'incoming envelope' },
  { id: 2619, code: '1f4e9', title: 'envelope with arrow' },
  { id: 2620, code: '1f4e4', title: 'outbox tray' },
  { id: 2621, code: '1f4e5', title: 'inbox tray' },
  { id: 2622, code: '1f4e6', title: 'package' },
  { id: 2623, code: '1f4eb', title: 'closed mailbox with raised flag' },
  { id: 2624, code: '1f4ea', title: 'closed mailbox with lowered flag' },
  { id: 2625, code: '1f4ec', title: 'open mailbox with raised flag' },
  { id: 2626, code: '1f4ed', title: 'open mailbox with lowered flag' },
  { id: 2627, code: '1f4ee', title: 'postbox' },
  { id: 2628, code: '1f5f3', title: 'ballot box with ballot' },
  { id: 2629, code: '270f', title: 'pencil' },
  { id: 2630, code: '2712', title: 'black nib' },
  { id: 2631, code: '1f58b', title: 'fountain pen' },
  { id: 2632, code: '1f58a', title: 'pen' },
  { id: 2633, code: '1f58c', title: 'paintbrush' },
  { id: 2634, code: '1f58d', title: 'crayon' },
  { id: 2635, code: '1f4dd', title: 'memo' },
  { id: 2636, code: '1f4bc', title: 'briefcase' },
  { id: 2637, code: '1f4c1', title: 'file folder' },
  { id: 2638, code: '1f4c2', title: 'open file folder' },
  { id: 2639, code: '1f5c2', title: 'card index dividers' },
  { id: 2640, code: '1f4c5', title: 'calendar' },
  { id: 2641, code: '1f4c6', title: 'tear-off calendar' },
  { id: 2642, code: '1f5d2', title: 'spiral notepad' },
  { id: 2643, code: '1f5d3', title: 'spiral calendar' },
  { id: 2644, code: '1f4c7', title: 'card index' },
  { id: 2645, code: '1f4c8', title: 'chart increasing' },
  { id: 2646, code: '1f4c9', title: 'chart decreasing' },
  { id: 2647, code: '1f4ca', title: 'bar chart' },
  { id: 2648, code: '1f4cb', title: 'clipboard' },
  { id: 2649, code: '1f4cc', title: 'pushpin' },
  { id: 2650, code: '1f4cd', title: 'round pushpin' },
  { id: 2651, code: '1f4ce', title: 'paperclip' },
  { id: 2652, code: '1f587', title: 'linked paperclips' },
  { id: 2653, code: '1f4cf', title: 'straight ruler' },
  { id: 2654, code: '1f4d0', title: 'triangular ruler' },
  { id: 2655, code: '2702', title: 'scissors' },
  { id: 2656, code: '1f5c3', title: 'card file box' },
  { id: 2657, code: '1f5c4', title: 'file cabinet' },
  { id: 2658, code: '1f5d1', title: 'wastebasket' },
  { id: 2659, code: '1f512', title: 'locked' },
  { id: 2660, code: '1f513', title: 'unlocked' },
  { id: 2661, code: '1f50f', title: 'locked with pen' },
  { id: 2662, code: '1f510', title: 'locked with key' },
  { id: 2663, code: '1f511', title: 'key' },
  { id: 2664, code: '1f5dd', title: 'old key' },
  { id: 2665, code: '1f528', title: 'hammer' },
  { id: 2666, code: '1fa93', title: 'axe' },
  { id: 2667, code: '26cf', title: 'pick' },
  { id: 2668, code: '2692', title: 'hammer and pick' },
  { id: 2669, code: '1f6e0', title: 'hammer and wrench' },
  { id: 2670, code: '1f5e1', title: 'dagger' },
  { id: 2671, code: '2694', title: 'crossed swords' },
  { id: 2672, code: '1f52b', title: 'pistol' },
  { id: 2673, code: '1f3f9', title: 'bow and arrow' },
  { id: 2674, code: '1f6e1', title: 'shield' },
  { id: 2675, code: '1f527', title: 'wrench' },
  { id: 2676, code: '1f529', title: 'nut and bolt' },
  { id: 2677, code: '2699', title: 'gear' },
  { id: 2678, code: '1f5dc', title: 'clamp' },
  { id: 2679, code: '2696', title: 'balance scale' },
  { id: 2680, code: '1f9af', title: 'white cane' },
  { id: 2681, code: '1f517', title: 'link' },
  { id: 2682, code: '26d3', title: 'chains' },
  { id: 2683, code: '1f9f0', title: 'toolbox' },
  { id: 2684, code: '1f9f2', title: 'magnet' },
  { id: 2685, code: '2697', title: 'alembic' },
  { id: 2686, code: '1f9ea', title: 'test tube' },
  { id: 2687, code: '1f9eb', title: 'petri dish' },
  { id: 2688, code: '1f9ec', title: 'dna' },
  { id: 2689, code: '1f52c', title: 'microscope' },
  { id: 2690, code: '1f52d', title: 'telescope' },
  { id: 2691, code: '1f4e1', title: 'satellite antenna' },
  { id: 2692, code: '1f489', title: 'syringe' },
  { id: 2693, code: '1fa78', title: 'drop of blood' },
  { id: 2694, code: '1f48a', title: 'pill' },
  { id: 2695, code: '1fa79', title: 'adhesive bandage' },
  { id: 2696, code: '1fa7a', title: 'stethoscope' },
  { id: 2697, code: '1f6aa', title: 'door' },
  { id: 2698, code: '1f6cf', title: 'bed' },
  { id: 2699, code: '1f6cb', title: 'couch and lamp' },
  { id: 2700, code: '1fa91', title: 'chair' },
  { id: 2701, code: '1f6bd', title: 'toilet' },
  { id: 2702, code: '1f6bf', title: 'shower' },
  { id: 2703, code: '1f6c1', title: 'bathtub' },
  { id: 2704, code: '1fa92', title: 'razor' },
  { id: 2705, code: '1f9f4', title: 'lotion bottle' },
  { id: 2706, code: '1f9f7', title: 'safety pin' },
  { id: 2707, code: '1f9f9', title: 'broom' },
  { id: 2708, code: '1f9fa', title: 'basket' },
  { id: 2709, code: '1f9fb', title: 'roll of paper' },
  { id: 2710, code: '1f9fc', title: 'soap' },
  { id: 2711, code: '1f9fd', title: 'sponge' },
  { id: 2712, code: '1f9ef', title: 'fire extinguisher' },
  { id: 2713, code: '1f6d2', title: 'shopping cart' },
  { id: 2714, code: '1f6ac', title: 'cigarette' },
  { id: 2715, code: '26b0', title: 'coffin' },
  { id: 2716, code: '26b1', title: 'funeral urn' },
  { id: 2717, code: '1f5ff', title: 'moai' },
  { id: 2718, code: '1f3e7', title: 'atm sign' },
  { id: 2719, code: '1f6ae', title: 'litter in bin sign' },
  { id: 2720, code: '1f6b0', title: 'potable water' },
  { id: 2721, code: '267f', title: 'wheelchair symbol' },
  { id: 2722, code: '1f6b9', title: 'men’s room' },
  { id: 2723, code: '1f6ba', title: 'women’s room' },
  { id: 2724, code: '1f6bb', title: 'restroom' },
  { id: 2725, code: '1f6bc', title: 'baby symbol' },
  { id: 2726, code: '1f6be', title: 'water closet' },
  { id: 2727, code: '1f6c2', title: 'passport control' },
  { id: 2728, code: '1f6c3', title: 'customs' },
  { id: 2729, code: '1f6c4', title: 'baggage claim' },
  { id: 2730, code: '1f6c5', title: 'left luggage' },
  { id: 2731, code: '26a0', title: 'warning' },
  { id: 2732, code: '1f6b8', title: 'children crossing' },
  { id: 2733, code: '26d4', title: 'no entry' },
  { id: 2734, code: '1f6ab', title: 'prohibited' },
  { id: 2735, code: '1f6b3', title: 'no bicycles' },
  { id: 2736, code: '1f6ad', title: 'no smoking' },
  { id: 2737, code: '1f6af', title: 'no littering' },
  { id: 2738, code: '1f6b1', title: 'non-potable water' },
  { id: 2739, code: '1f6b7', title: 'no pedestrians' },
  { id: 2740, code: '1f4f5', title: 'no mobile phones' },
  { id: 2741, code: '1f51e', title: 'no one under eighteen' },
  { id: 2742, code: '2622', title: 'radioactive' },
  { id: 2743, code: '2623', title: 'biohazard' },
  { id: 2744, code: '2b06', title: 'up arrow' },
  { id: 2745, code: '2197', title: 'up-right arrow' },
  { id: 2746, code: '27a1', title: 'right arrow' },
  { id: 2747, code: '2198', title: 'down-right arrow' },
  { id: 2748, code: '2b07', title: 'down arrow' },
  { id: 2749, code: '2199', title: 'down-left arrow' },
  { id: 2750, code: '2b05', title: 'left arrow' },
  { id: 2751, code: '2196', title: 'up-left arrow' },
  { id: 2752, code: '2195', title: 'up-down arrow' },
  { id: 2753, code: '2194', title: 'left-right arrow' },
  { id: 2754, code: '21a9', title: 'right arrow curving left' },
  { id: 2755, code: '21aa', title: 'left arrow curving right' },
  { id: 2756, code: '2934', title: 'right arrow curving up' },
  { id: 2757, code: '2935', title: 'right arrow curving down' },
  { id: 2758, code: '1f503', title: 'clockwise vertical arrows' },
  { id: 2759, code: '1f504', title: 'counterclockwise arrows button' },
  { id: 2760, code: '1f519', title: 'back arrow' },
  { id: 2761, code: '1f51a', title: 'end arrow' },
  { id: 2762, code: '1f51b', title: 'on! arrow' },
  { id: 2763, code: '1f51c', title: 'soon arrow' },
  { id: 2764, code: '1f51d', title: 'top arrow' },
  { id: 2765, code: '1f6d0', title: 'place of worship' },
  { id: 2766, code: '269b', title: 'atom symbol' },
  { id: 2767, code: '1f549', title: 'om' },
  { id: 2768, code: '2721', title: 'star of david' },
  { id: 2769, code: '2638', title: 'wheel of dharma' },
  { id: 2770, code: '262f', title: 'yin yang' },
  { id: 2771, code: '271d', title: 'latin cross' },
  { id: 2772, code: '2626', title: 'orthodox cross' },
  { id: 2773, code: '262a', title: 'star and crescent' },
  { id: 2774, code: '262e', title: 'peace symbol' },
  { id: 2775, code: '1f54e', title: 'menorah' },
  { id: 2776, code: '1f52f', title: 'dotted six-pointed star' },
  { id: 2777, code: '2648', title: 'aries' },
  { id: 2778, code: '2649', title: 'taurus' },
  { id: 2779, code: '264a', title: 'gemini' },
  { id: 2780, code: '264b', title: 'cancer' },
  { id: 2781, code: '264c', title: 'leo' },
  { id: 2782, code: '264d', title: 'virgo' },
  { id: 2783, code: '264e', title: 'libra' },
  { id: 2784, code: '264f', title: 'scorpio' },
  { id: 2785, code: '2650', title: 'sagittarius' },
  { id: 2786, code: '2651', title: 'capricorn' },
  { id: 2787, code: '2652', title: 'aquarius' },
  { id: 2788, code: '2653', title: 'pisces' },
  { id: 2789, code: '26ce', title: 'ophiuchus' },
  { id: 2790, code: '1f500', title: 'shuffle tracks button' },
  { id: 2791, code: '1f501', title: 'repeat button' },
  { id: 2792, code: '1f502', title: 'repeat single button' },
  { id: 2793, code: '25b6', title: 'play button' },
  { id: 2794, code: '23e9', title: 'fast-forward button' },
  { id: 2795, code: '23ed', title: 'next track button' },
  { id: 2796, code: '23ef', title: 'play or pause button' },
  { id: 2797, code: '25c0', title: 'reverse button' },
  { id: 2798, code: '23ea', title: 'fast reverse button' },
  { id: 2799, code: '23ee', title: 'last track button' },
  { id: 2800, code: '1f53c', title: 'upwards button' },
  { id: 2801, code: '23eb', title: 'fast up button' },
  { id: 2802, code: '1f53d', title: 'downwards button' },
  { id: 2803, code: '23ec', title: 'fast down button' },
  { id: 2804, code: '23f8', title: 'pause button' },
  { id: 2805, code: '23f9', title: 'stop button' },
  { id: 2806, code: '23fa', title: 'record button' },
  { id: 2807, code: '23cf', title: 'eject button' },
  { id: 2808, code: '1f3a6', title: 'cinema' },
  { id: 2809, code: '1f505', title: 'dim button' },
  { id: 2810, code: '1f506', title: 'bright button' },
  { id: 2811, code: '1f4f6', title: 'antenna bars' },
  { id: 2812, code: '1f4f3', title: 'vibration mode' },
  { id: 2813, code: '1f4f4', title: 'mobile phone off' },
  { id: 2814, code: '2640', title: 'female sign' },
  { id: 2815, code: '2642', title: 'male sign' },
  { id: 2816, code: '26a7', title: 'transgender symbol' },
  { id: 2817, code: '2716', title: 'multiply' },
  { id: 2818, code: '2795', title: 'plus' },
  { id: 2819, code: '2796', title: 'minus' },
  { id: 2820, code: '2797', title: 'divide' },
  { id: 2821, code: '267e', title: 'infinity' },
  { id: 2822, code: '203c', title: 'double exclamation mark' },
  { id: 2823, code: '2049', title: 'exclamation question mark' },
  { id: 2824, code: '2753', title: 'question mark' },
  { id: 2825, code: '2754', title: 'white question mark' },
  { id: 2826, code: '2755', title: 'white exclamation mark' },
  { id: 2827, code: '2757', title: 'exclamation mark' },
  { id: 2828, code: '3030', title: 'wavy dash' },
  { id: 2829, code: '1f4b1', title: 'currency exchange' },
  { id: 2830, code: '1f4b2', title: 'heavy dollar sign' },
  { id: 2831, code: '2695', title: 'medical symbol' },
  { id: 2832, code: '267b', title: 'recycling symbol' },
  { id: 2833, code: '269c', title: 'fleur-de-lis' },
  { id: 2834, code: '1f531', title: 'trident emblem' },
  { id: 2835, code: '1f4db', title: 'name badge' },
  { id: 2836, code: '1f530', title: 'japanese symbol for beginner' },
  { id: 2837, code: '2b55', title: 'hollow red circle' },
  { id: 2838, code: '2705', title: 'check mark button' },
  { id: 2839, code: '2611', title: 'check box with check' },
  { id: 2840, code: '2714', title: 'check mark' },
  { id: 2841, code: '274c', title: 'cross mark' },
  { id: 2842, code: '274e', title: 'cross mark button' },
  { id: 2843, code: '27b0', title: 'curly loop' },
  { id: 2844, code: '27bf', title: 'double curly loop' },
  { id: 2845, code: '303d', title: 'part alternation mark' },
  { id: 2846, code: '2733', title: 'eight-spoked asterisk' },
  { id: 2847, code: '2734', title: 'eight-pointed star' },
  { id: 2848, code: '2747', title: 'sparkle' },
  { id: 2849, code: 'a9', title: 'copyright' },
  { id: 2850, code: 'ae', title: 'registered' },
  { id: 2851, code: '2122', title: 'trade mark' },
  { id: 2852, code: '23-20e3', title: 'keycap number sign' },
  { id: 2853, code: '2a-20e3', title: 'keycap asterisk' },
  { id: 2854, code: '30-20e3', title: 'keycap digit zero' },
  { id: 2855, code: '31-20e3', title: 'keycap digit one' },
  { id: 2856, code: '32-20e3', title: 'keycap digit two' },
  { id: 2857, code: '33-20e3', title: 'keycap digit three' },
  { id: 2858, code: '34-20e3', title: 'keycap digit four' },
  { id: 2859, code: '35-20e3', title: 'keycap digit five' },
  { id: 2860, code: '36-20e3', title: 'keycap digit six' },
  { id: 2861, code: '37-20e3', title: 'keycap digit seven' },
  { id: 2862, code: '38-20e3', title: 'keycap digit eight' },
  { id: 2863, code: '39-20e3', title: 'keycap digit nine' },
  { id: 2864, code: '1f51f', title: 'keycap: 10' },
  { id: 2865, code: '1f520', title: 'input latin uppercase' },
  { id: 2866, code: '1f521', title: 'input latin lowercase' },
  { id: 2867, code: '1f522', title: 'input numbers' },
  { id: 2868, code: '1f523', title: 'input symbols' },
  { id: 2869, code: '1f524', title: 'input latin letters' },
  { id: 2870, code: '1f170', title: 'a button (blood type)' },
  { id: 2871, code: '1f18e', title: 'ab button (blood type)' },
  { id: 2872, code: '1f171', title: 'b button (blood type)' },
  { id: 2873, code: '1f191', title: 'cl button' },
  { id: 2874, code: '1f192', title: 'cool button' },
  { id: 2875, code: '1f193', title: 'free button' },
  { id: 2876, code: '2139', title: 'information' },
  { id: 2877, code: '1f194', title: 'id button' },
  { id: 2878, code: '24c2', title: 'circled m' },
  { id: 2879, code: '1f195', title: 'new button' },
  { id: 2880, code: '1f196', title: 'ng button' },
  { id: 2881, code: '1f17e', title: 'o button (blood type)' },
  { id: 2882, code: '1f197', title: 'ok button' },
  { id: 2883, code: '1f17f', title: 'p button' },
  { id: 2884, code: '1f198', title: 'sos button' },
  { id: 2885, code: '1f199', title: 'up! button' },
  { id: 2886, code: '1f19a', title: 'vs button' },
  { id: 2887, code: '1f201', title: 'japanese “here” button' },
  { id: 2888, code: '1f202', title: 'japanese “service charge” button' },
  { id: 2889, code: '1f237', title: 'japanese “monthly amount” button' },
  { id: 2890, code: '1f236', title: 'japanese “not free of charge” button' },
  { id: 2891, code: '1f22f', title: 'japanese “reserved” button' },
  { id: 2892, code: '1f250', title: 'japanese “bargain” button' },
  { id: 2893, code: '1f239', title: 'japanese “discount” button' },
  { id: 2894, code: '1f21a', title: 'japanese “free of charge” button' },
  { id: 2895, code: '1f232', title: 'japanese “prohibited” button' },
  { id: 2896, code: '1f251', title: 'japanese “acceptable” button' },
  { id: 2897, code: '1f238', title: 'japanese “application” button' },
  { id: 2898, code: '1f234', title: 'japanese “passing grade” button' },
  { id: 2899, code: '1f233', title: 'japanese “vacancy” button' },
  { id: 2900, code: '3297', title: 'japanese “congratulations” button' },
  { id: 2901, code: '3299', title: 'japanese “secret” button' },
  { id: 2902, code: '1f23a', title: 'japanese “open for business” button' },
  { id: 2903, code: '1f235', title: 'japanese “no vacancy” button' },
  { id: 2904, code: '1f534', title: 'red circle' },
  { id: 2905, code: '1f7e0', title: 'orange circle' },
  { id: 2906, code: '1f7e1', title: 'yellow circle' },
  { id: 2907, code: '1f7e2', title: 'green circle' },
  { id: 2908, code: '1f535', title: 'blue circle' },
  { id: 2909, code: '1f7e3', title: 'purple circle' },
  { id: 2910, code: '1f7e4', title: 'brown circle' },
  { id: 2911, code: '26ab', title: 'black circle' },
  { id: 2912, code: '26aa', title: 'white circle' },
  { id: 2913, code: '1f7e5', title: 'red square' },
  { id: 2914, code: '1f7e7', title: 'orange square' },
  { id: 2915, code: '1f7e8', title: 'yellow square' },
  { id: 2916, code: '1f7e9', title: 'green square' },
  { id: 2917, code: '1f7e6', title: 'blue square' },
  { id: 2918, code: '1f7ea', title: 'purple square' },
  { id: 2919, code: '1f7eb', title: 'brown square' },
  { id: 2920, code: '2b1b', title: 'black large square' },
  { id: 2921, code: '2b1c', title: 'white large square' },
  { id: 2922, code: '25fc', title: 'black medium square' },
  { id: 2923, code: '25fb', title: 'white medium square' },
  { id: 2924, code: '25fe', title: 'black medium-small square' },
  { id: 2925, code: '25fd', title: 'white medium-small square' },
  { id: 2926, code: '25aa', title: 'black small square' },
  { id: 2927, code: '25ab', title: 'white small square' },
  { id: 2928, code: '1f536', title: 'large orange diamond' },
  { id: 2929, code: '1f537', title: 'large blue diamond' },
  { id: 2930, code: '1f538', title: 'small orange diamond' },
  { id: 2931, code: '1f539', title: 'small blue diamond' },
  { id: 2932, code: '1f53a', title: 'red triangle pointed up' },
  { id: 2933, code: '1f53b', title: 'red triangle pointed down' },
  { id: 2934, code: '1f4a0', title: 'diamond with a dot' },
  { id: 2935, code: '1f518', title: 'radio button' },
  { id: 2936, code: '1f533', title: 'white square button' },
  { id: 2937, code: '1f532', title: 'black square button' },
  { id: 2938, code: '1f3c1', title: 'chequered flag' },
  { id: 2939, code: '1f6a9', title: 'triangular flag' },
  { id: 2940, code: '1f38c', title: 'crossed flags' },
  { id: 2941, code: '1f3f4', title: 'black flag' },
  { id: 2942, code: '1f3f3', title: 'white flag' },
  { id: 2943, code: '1f3f3-fe0f-200d-1f308', title: 'rainbow flag' },
  { id: 2944, code: '1f3f3-fe0f-200d-26a7-fe0f', title: 'transgender flag' },
  { id: 2945, code: '1f3f4-200d-2620-fe0f', title: 'pirate flag' },
  { id: 2946, code: '1f1e6-1f1e8', title: 'flag: ascension island' },
  { id: 2947, code: '1f1e6-1f1e9', title: 'flag: andorra' },
  { id: 2948, code: '1f1e6-1f1ea', title: 'flag: united arab emirates' },
  { id: 2949, code: '1f1e6-1f1eb', title: 'flag: afghanistan' },
  { id: 2950, code: '1f1e6-1f1ec', title: 'flag: antigua &amp; barbuda' },
  { id: 2951, code: '1f1e6-1f1ee', title: 'flag: anguilla' },
  { id: 2952, code: '1f1e6-1f1f1', title: 'flag: albania' },
  { id: 2953, code: '1f1e6-1f1f2', title: 'flag: armenia' },
  { id: 2954, code: '1f1e6-1f1f4', title: 'flag: angola' },
  { id: 2955, code: '1f1e6-1f1f6', title: 'flag: antarctica' },
  { id: 2956, code: '1f1e6-1f1f7', title: 'flag: argentina' },
  { id: 2957, code: '1f1e6-1f1f8', title: 'flag: american samoa' },
  { id: 2958, code: '1f1e6-1f1f9', title: 'flag: austria' },
  { id: 2959, code: '1f1e6-1f1fa', title: 'flag: australia' },
  { id: 2960, code: '1f1e6-1f1fc', title: 'flag: aruba' },
  { id: 2961, code: '1f1e6-1f1fd', title: 'flag: åland islands' },
  { id: 2962, code: '1f1e6-1f1ff', title: 'flag: azerbaijan' },
  { id: 2963, code: '1f1e7-1f1e6', title: 'flag: bosnia &amp; herzegovina' },
  { id: 2964, code: '1f1e7-1f1e7', title: 'flag: barbados' },
  { id: 2965, code: '1f1e7-1f1e9', title: 'flag: bangladesh' },
  { id: 2966, code: '1f1e7-1f1ea', title: 'flag: belgium' },
  { id: 2967, code: '1f1e7-1f1eb', title: 'flag: burkina faso' },
  { id: 2968, code: '1f1e7-1f1ec', title: 'flag: bulgaria' },
  { id: 2969, code: '1f1e7-1f1ed', title: 'flag: bahrain' },
  { id: 2970, code: '1f1e7-1f1ee', title: 'flag: burundi' },
  { id: 2971, code: '1f1e7-1f1ef', title: 'flag: benin' },
  { id: 2972, code: '1f1e7-1f1f1', title: 'flag: st. barthélemy' },
  { id: 2973, code: '1f1e7-1f1f2', title: 'flag: bermuda' },
  { id: 2974, code: '1f1e7-1f1f3', title: 'flag: brunei' },
  { id: 2975, code: '1f1e7-1f1f4', title: 'flag: bolivia' },
  { id: 2976, code: '1f1e7-1f1f6', title: 'flag: caribbean netherlands' },
  { id: 2977, code: '1f1e7-1f1f7', title: 'flag: brazil' },
  { id: 2978, code: '1f1e7-1f1f8', title: 'flag: bahamas' },
  { id: 2979, code: '1f1e7-1f1f9', title: 'flag: bhutan' },
  { id: 2980, code: '1f1e7-1f1fb', title: 'flag: bouvet island' },
  { id: 2981, code: '1f1e7-1f1fc', title: 'flag: botswana' },
  { id: 2982, code: '1f1e7-1f1fe', title: 'flag: belarus' },
  { id: 2983, code: '1f1e7-1f1ff', title: 'flag: belize' },
  { id: 2984, code: '1f1e8-1f1e6', title: 'flag: canada' },
  { id: 2985, code: '1f1e8-1f1e8', title: 'flag: cocos (keeling) islands' },
  { id: 2986, code: '1f1e8-1f1e9', title: 'flag: congo - kinshasa' },
  { id: 2987, code: '1f1e8-1f1eb', title: 'flag: central african republic' },
  { id: 2988, code: '1f1e8-1f1ec', title: 'flag: congo - brazzaville' },
  { id: 2989, code: '1f1e8-1f1ed', title: 'flag: switzerland' },
  { id: 2990, code: '1f1e8-1f1ee', title: 'flag: côte d’ivoire' },
  { id: 2991, code: '1f1e8-1f1f0', title: 'flag: cook islands' },
  { id: 2992, code: '1f1e8-1f1f1', title: 'flag: chile' },
  { id: 2993, code: '1f1e8-1f1f2', title: 'flag: cameroon' },
  { id: 2994, code: '1f1e8-1f1f3', title: 'flag: china' },
  { id: 2995, code: '1f1e8-1f1f4', title: 'flag: colombia' },
  { id: 2996, code: '1f1e8-1f1f5', title: 'flag: clipperton island' },
  { id: 2997, code: '1f1e8-1f1f7', title: 'flag: costa rica' },
  { id: 2998, code: '1f1e8-1f1fa', title: 'flag: cuba' },
  { id: 2999, code: '1f1e8-1f1fb', title: 'flag: cape verde' },
  { id: 3000, code: '1f1e8-1f1fc', title: 'flag: curaçao' },
  { id: 3001, code: '1f1e8-1f1fd', title: 'flag: christmas island' },
  { id: 3002, code: '1f1e8-1f1fe', title: 'flag: cyprus' },
  { id: 3003, code: '1f1e8-1f1ff', title: 'flag: czechia' },
  { id: 3004, code: '1f1e9-1f1ea', title: 'flag: germany' },
  { id: 3005, code: '1f1e9-1f1ec', title: 'flag: diego garcia' },
  { id: 3006, code: '1f1e9-1f1ef', title: 'flag: djibouti' },
  { id: 3007, code: '1f1e9-1f1f0', title: 'flag: denmark' },
  { id: 3008, code: '1f1e9-1f1f2', title: 'flag: dominica' },
  { id: 3009, code: '1f1e9-1f1f4', title: 'flag: dominican republic' },
  { id: 3010, code: '1f1e9-1f1ff', title: 'flag: algeria' },
  { id: 3011, code: '1f1ea-1f1e6', title: 'flag: ceuta &amp; melilla' },
  { id: 3012, code: '1f1ea-1f1e8', title: 'flag: ecuador' },
  { id: 3013, code: '1f1ea-1f1ea', title: 'flag: estonia' },
  { id: 3014, code: '1f1ea-1f1ec', title: 'flag: egypt' },
  { id: 3015, code: '1f1ea-1f1ed', title: 'flag: western sahara' },
  { id: 3016, code: '1f1ea-1f1f7', title: 'flag: eritrea' },
  { id: 3017, code: '1f1ea-1f1f8', title: 'flag: spain' },
  { id: 3018, code: '1f1ea-1f1f9', title: 'flag: ethiopia' },
  { id: 3019, code: '1f1ea-1f1fa', title: 'flag: european union' },
  { id: 3020, code: '1f1eb-1f1ee', title: 'flag: finland' },
  { id: 3021, code: '1f1eb-1f1ef', title: 'flag: fiji' },
  { id: 3022, code: '1f1eb-1f1f0', title: 'flag: falkland islands' },
  { id: 3023, code: '1f1eb-1f1f2', title: 'flag: micronesia' },
  { id: 3024, code: '1f1eb-1f1f4', title: 'flag: faroe islands' },
  { id: 3025, code: '1f1eb-1f1f7', title: 'flag: france' },
  { id: 3026, code: '1f1ec-1f1e6', title: 'flag: gabon' },
  { id: 3027, code: '1f1ec-1f1e7', title: 'flag: united kingdom' },
  { id: 3028, code: '1f1ec-1f1e9', title: 'flag: grenada' },
  { id: 3029, code: '1f1ec-1f1ea', title: 'flag: georgia' },
  { id: 3030, code: '1f1ec-1f1eb', title: 'flag: french guiana' },
  { id: 3031, code: '1f1ec-1f1ec', title: 'flag: guernsey' },
  { id: 3032, code: '1f1ec-1f1ed', title: 'flag: ghana' },
  { id: 3033, code: '1f1ec-1f1ee', title: 'flag: gibraltar' },
  { id: 3034, code: '1f1ec-1f1f1', title: 'flag: greenland' },
  { id: 3035, code: '1f1ec-1f1f2', title: 'flag: gambia' },
  { id: 3036, code: '1f1ec-1f1f3', title: 'flag: guinea' },
  { id: 3037, code: '1f1ec-1f1f5', title: 'flag: guadeloupe' },
  { id: 3038, code: '1f1ec-1f1f6', title: 'flag: equatorial guinea' },
  { id: 3039, code: '1f1ec-1f1f7', title: 'flag: greece' },
  {
    id: 3040,
    code: '1f1ec-1f1f8',
    title: 'flag: south georgia &amp; south sandwich islands'
  },
  { id: 3041, code: '1f1ec-1f1f9', title: 'flag: guatemala' },
  { id: 3042, code: '1f1ec-1f1fa', title: 'flag: guam' },
  { id: 3043, code: '1f1ec-1f1fc', title: 'flag: guinea-bissau' },
  { id: 3044, code: '1f1ec-1f1fe', title: 'flag: guyana' },
  { id: 3045, code: '1f1ed-1f1f0', title: 'flag: hong kong sar china' },
  {
    id: 3046,
    code: '1f1ed-1f1f2',
    title: 'flag: heard &amp; mcdonald islands'
  },
  { id: 3047, code: '1f1ed-1f1f3', title: 'flag: honduras' },
  { id: 3048, code: '1f1ed-1f1f7', title: 'flag: croatia' },
  { id: 3049, code: '1f1ed-1f1f9', title: 'flag: haiti' },
  { id: 3050, code: '1f1ed-1f1fa', title: 'flag: hungary' },
  { id: 3051, code: '1f1ee-1f1e8', title: 'flag: canary islands' },
  { id: 3052, code: '1f1ee-1f1e9', title: 'flag: indonesia' },
  { id: 3053, code: '1f1ee-1f1ea', title: 'flag: ireland' },
  { id: 3054, code: '1f1ee-1f1f1', title: 'flag: israel' },
  { id: 3055, code: '1f1ee-1f1f2', title: 'flag: isle of man' },
  { id: 3056, code: '1f1ee-1f1f3', title: 'flag: india' },
  {
    id: 3057,
    code: '1f1ee-1f1f4',
    title: 'flag: british indian ocean territory'
  },
  { id: 3058, code: '1f1ee-1f1f6', title: 'flag: iraq' },
  { id: 3059, code: '1f1ee-1f1f7', title: 'flag: iran' },
  { id: 3060, code: '1f1ee-1f1f8', title: 'flag: iceland' },
  { id: 3061, code: '1f1ee-1f1f9', title: 'flag: italy' },
  { id: 3062, code: '1f1ef-1f1ea', title: 'flag: jersey' },
  { id: 3063, code: '1f1ef-1f1f2', title: 'flag: jamaica' },
  { id: 3064, code: '1f1ef-1f1f4', title: 'flag: jordan' },
  { id: 3065, code: '1f1ef-1f1f5', title: 'flag: japan' },
  { id: 3066, code: '1f1f0-1f1ea', title: 'flag: kenya' },
  { id: 3067, code: '1f1f0-1f1ec', title: 'flag: kyrgyzstan' },
  { id: 3068, code: '1f1f0-1f1ed', title: 'flag: cambodia' },
  { id: 3069, code: '1f1f0-1f1ee', title: 'flag: kiribati' },
  { id: 3070, code: '1f1f0-1f1f2', title: 'flag: comoros' },
  { id: 3071, code: '1f1f0-1f1f3', title: 'flag: st. kitts &amp; nevis' },
  { id: 3072, code: '1f1f0-1f1f5', title: 'flag: north korea' },
  { id: 3073, code: '1f1f0-1f1f7', title: 'flag: south korea' },
  { id: 3074, code: '1f1f0-1f1fc', title: 'flag: kuwait' },
  { id: 3075, code: '1f1f0-1f1fe', title: 'flag: cayman islands' },
  { id: 3076, code: '1f1f0-1f1ff', title: 'flag: kazakhstan' },
  { id: 3077, code: '1f1f1-1f1e6', title: 'flag: laos' },
  { id: 3078, code: '1f1f1-1f1e7', title: 'flag: lebanon' },
  { id: 3079, code: '1f1f1-1f1e8', title: 'flag: st. lucia' },
  { id: 3080, code: '1f1f1-1f1ee', title: 'flag: liechtenstein' },
  { id: 3081, code: '1f1f1-1f1f0', title: 'flag: sri lanka' },
  { id: 3082, code: '1f1f1-1f1f7', title: 'flag: liberia' },
  { id: 3083, code: '1f1f1-1f1f8', title: 'flag: lesotho' },
  { id: 3084, code: '1f1f1-1f1f9', title: 'flag: lithuania' },
  { id: 3085, code: '1f1f1-1f1fa', title: 'flag: luxembourg' },
  { id: 3086, code: '1f1f1-1f1fb', title: 'flag: latvia' },
  { id: 3087, code: '1f1f1-1f1fe', title: 'flag: libya' },
  { id: 3088, code: '1f1f2-1f1e6', title: 'flag: morocco' },
  { id: 3089, code: '1f1f2-1f1e8', title: 'flag: monaco' },
  { id: 3090, code: '1f1f2-1f1e9', title: 'flag: moldova' },
  { id: 3091, code: '1f1f2-1f1ea', title: 'flag: montenegro' },
  { id: 3092, code: '1f1f2-1f1eb', title: 'flag: st. martin' },
  { id: 3093, code: '1f1f2-1f1ec', title: 'flag: madagascar' },
  { id: 3094, code: '1f1f2-1f1ed', title: 'flag: marshall islands' },
  { id: 3095, code: '1f1f2-1f1f0', title: 'flag: north macedonia' },
  { id: 3096, code: '1f1f2-1f1f1', title: 'flag: mali' },
  { id: 3097, code: '1f1f2-1f1f2', title: 'flag: myanmar (burma)' },
  { id: 3098, code: '1f1f2-1f1f3', title: 'flag: mongolia' },
  { id: 3099, code: '1f1f2-1f1f4', title: 'flag: macao sar china' },
  { id: 3100, code: '1f1f2-1f1f5', title: 'flag: northern mariana islands' },
  { id: 3101, code: '1f1f2-1f1f6', title: 'flag: martinique' },
  { id: 3102, code: '1f1f2-1f1f7', title: 'flag: mauritania' },
  { id: 3103, code: '1f1f2-1f1f8', title: 'flag: montserrat' },
  { id: 3104, code: '1f1f2-1f1f9', title: 'flag: malta' },
  { id: 3105, code: '1f1f2-1f1fa', title: 'flag: mauritius' },
  { id: 3106, code: '1f1f2-1f1fb', title: 'flag: maldives' },
  { id: 3107, code: '1f1f2-1f1fc', title: 'flag: malawi' },
  { id: 3108, code: '1f1f2-1f1fd', title: 'flag: mexico' },
  { id: 3109, code: '1f1f2-1f1fe', title: 'flag: malaysia' },
  { id: 3110, code: '1f1f2-1f1ff', title: 'flag: mozambique' },
  { id: 3111, code: '1f1f3-1f1e6', title: 'flag: namibia' },
  { id: 3112, code: '1f1f3-1f1e8', title: 'flag: new caledonia' },
  { id: 3113, code: '1f1f3-1f1ea', title: 'flag: niger' },
  { id: 3114, code: '1f1f3-1f1eb', title: 'flag: norfolk island' },
  { id: 3115, code: '1f1f3-1f1ec', title: 'flag: nigeria' },
  { id: 3116, code: '1f1f3-1f1ee', title: 'flag: nicaragua' },
  { id: 3117, code: '1f1f3-1f1f1', title: 'flag: netherlands' },
  { id: 3118, code: '1f1f3-1f1f4', title: 'flag: norway' },
  { id: 3119, code: '1f1f3-1f1f5', title: 'flag: nepal' },
  { id: 3120, code: '1f1f3-1f1f7', title: 'flag: nauru' },
  { id: 3121, code: '1f1f3-1f1fa', title: 'flag: niue' },
  { id: 3122, code: '1f1f3-1f1ff', title: 'flag: new zealand' },
  { id: 3123, code: '1f1f4-1f1f2', title: 'flag: oman' },
  { id: 3124, code: '1f1f5-1f1e6', title: 'flag: panama' },
  { id: 3125, code: '1f1f5-1f1ea', title: 'flag: peru' },
  { id: 3126, code: '1f1f5-1f1eb', title: 'flag: french polynesia' },
  { id: 3127, code: '1f1f5-1f1ec', title: 'flag: papua new guinea' },
  { id: 3128, code: '1f1f5-1f1ed', title: 'flag: philippines' },
  { id: 3129, code: '1f1f5-1f1f0', title: 'flag: pakistan' },
  { id: 3130, code: '1f1f5-1f1f1', title: 'flag: poland' },
  { id: 3131, code: '1f1f5-1f1f2', title: 'flag: st. pierre &amp; miquelon' },
  { id: 3132, code: '1f1f5-1f1f3', title: 'flag: pitcairn islands' },
  { id: 3133, code: '1f1f5-1f1f7', title: 'flag: puerto rico' },
  { id: 3134, code: '1f1f5-1f1f8', title: 'flag: palestinian territories' },
  { id: 3135, code: '1f1f5-1f1f9', title: 'flag: portugal' },
  { id: 3136, code: '1f1f5-1f1fc', title: 'flag: palau' },
  { id: 3137, code: '1f1f5-1f1fe', title: 'flag: paraguay' },
  { id: 3138, code: '1f1f6-1f1e6', title: 'flag: qatar' },
  { id: 3139, code: '1f1f7-1f1ea', title: 'flag: réunion' },
  { id: 3140, code: '1f1f7-1f1f4', title: 'flag: romania' },
  { id: 3141, code: '1f1f7-1f1f8', title: 'flag: serbia' },
  { id: 3142, code: '1f1f7-1f1fa', title: 'flag: russia' },
  { id: 3143, code: '1f1f7-1f1fc', title: 'flag: rwanda' },
  { id: 3144, code: '1f1f8-1f1e6', title: 'flag: saudi arabia' },
  { id: 3145, code: '1f1f8-1f1e7', title: 'flag: solomon islands' },
  { id: 3146, code: '1f1f8-1f1e8', title: 'flag: seychelles' },
  { id: 3147, code: '1f1f8-1f1e9', title: 'flag: sudan' },
  { id: 3148, code: '1f1f8-1f1ea', title: 'flag: sweden' },
  { id: 3149, code: '1f1f8-1f1ec', title: 'flag: singapore' },
  { id: 3150, code: '1f1f8-1f1ed', title: 'flag: st. helena' },
  { id: 3151, code: '1f1f8-1f1ee', title: 'flag: slovenia' },
  { id: 3152, code: '1f1f8-1f1ef', title: 'flag: svalbard &amp; jan mayen' },
  { id: 3153, code: '1f1f8-1f1f0', title: 'flag: slovakia' },
  { id: 3154, code: '1f1f8-1f1f1', title: 'flag: sierra leone' },
  { id: 3155, code: '1f1f8-1f1f2', title: 'flag: san marino' },
  { id: 3156, code: '1f1f8-1f1f3', title: 'flag: senegal' },
  { id: 3157, code: '1f1f8-1f1f4', title: 'flag: somalia' },
  { id: 3158, code: '1f1f8-1f1f7', title: 'flag: suriname' },
  { id: 3159, code: '1f1f8-1f1f8', title: 'flag: south sudan' },
  { id: 3160, code: '1f1f8-1f1f9', title: 'flag: são tomé &amp; príncipe' },
  { id: 3161, code: '1f1f8-1f1fb', title: 'flag: el salvador' },
  { id: 3162, code: '1f1f8-1f1fd', title: 'flag: sint maarten' },
  { id: 3163, code: '1f1f8-1f1fe', title: 'flag: syria' },
  { id: 3164, code: '1f1f8-1f1ff', title: 'flag: eswatini' },
  { id: 3165, code: '1f1f9-1f1e6', title: 'flag: tristan da cunha' },
  { id: 3166, code: '1f1f9-1f1e8', title: 'flag: turks &amp; caicos islands' },
  { id: 3167, code: '1f1f9-1f1e9', title: 'flag: chad' },
  { id: 3168, code: '1f1f9-1f1eb', title: 'flag: french southern territories' },
  { id: 3169, code: '1f1f9-1f1ec', title: 'flag: togo' },
  { id: 3170, code: '1f1f9-1f1ed', title: 'flag: thailand' },
  { id: 3171, code: '1f1f9-1f1ef', title: 'flag: tajikistan' },
  { id: 3172, code: '1f1f9-1f1f0', title: 'flag: tokelau' },
  { id: 3173, code: '1f1f9-1f1f1', title: 'flag: timor-leste' },
  { id: 3174, code: '1f1f9-1f1f2', title: 'flag: turkmenistan' },
  { id: 3175, code: '1f1f9-1f1f3', title: 'flag: tunisia' },
  { id: 3176, code: '1f1f9-1f1f4', title: 'flag: tonga' },
  { id: 3177, code: '1f1f9-1f1f7', title: 'flag: turkey' },
  { id: 3178, code: '1f1f9-1f1f9', title: 'flag: trinidad &amp; tobago' },
  { id: 3179, code: '1f1f9-1f1fb', title: 'flag: tuvalu' },
  { id: 3180, code: '1f1f9-1f1fc', title: 'flag: taiwan' },
  { id: 3181, code: '1f1f9-1f1ff', title: 'flag: tanzania' },
  { id: 3182, code: '1f1fa-1f1e6', title: 'flag: ukraine' },
  { id: 3183, code: '1f1fa-1f1ec', title: 'flag: uganda' },
  { id: 3184, code: '1f1fa-1f1f2', title: 'flag: u.s. outlying islands' },
  { id: 3185, code: '1f1fa-1f1f3', title: 'flag: united nations' },
  { id: 3186, code: '1f1fa-1f1f8', title: 'flag: united states' },
  { id: 3187, code: '1f1fa-1f1fe', title: 'flag: uruguay' },
  { id: 3188, code: '1f1fa-1f1ff', title: 'flag: uzbekistan' },
  { id: 3189, code: '1f1fb-1f1e6', title: 'flag: vatican city' },
  {
    id: 3190,
    code: '1f1fb-1f1e8',
    title: 'flag: st. vincent &amp; grenadines'
  },
  { id: 3191, code: '1f1fb-1f1ea', title: 'flag: venezuela' },
  { id: 3192, code: '1f1fb-1f1ec', title: 'flag: british virgin islands' },
  { id: 3193, code: '1f1fb-1f1ee', title: 'flag: u.s. virgin islands' },
  { id: 3194, code: '1f1fb-1f1f3', title: 'flag: vietnam' },
  { id: 3195, code: '1f1fb-1f1fa', title: 'flag: vanuatu' },
  { id: 3196, code: '1f1fc-1f1eb', title: 'flag: wallis &amp; futuna' },
  { id: 3197, code: '1f1fc-1f1f8', title: 'flag: samoa' },
  { id: 3198, code: '1f1fd-1f1f0', title: 'flag: kosovo' },
  { id: 3199, code: '1f1fe-1f1ea', title: 'flag: yemen' },
  { id: 3200, code: '1f1fe-1f1f9', title: 'flag: mayotte' },
  { id: 3201, code: '1f1ff-1f1e6', title: 'flag: south africa' },
  { id: 3202, code: '1f1ff-1f1f2', title: 'flag: zambia' },
  { id: 3203, code: '1f1ff-1f1fc', title: 'flag: zimbabwe' },
  {
    id: 3204,
    code: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
    title: 'flag: england'
  },
  {
    id: 3205,
    code: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
    title: 'flag: scotland'
  },
  {
    id: 3206,
    code: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
    title: 'flag: wales'
  },
  { id: 3207, code: '1f1e6', title: 'regional indicator symbol letter a' },
  { id: 3208, code: '1f1e7', title: 'regional indicator symbol letter b' },
  { id: 3209, code: '1f1e8', title: 'regional indicator symbol letter c' },
  { id: 3210, code: '1f1e9', title: 'regional indicator symbol letter d' },
  { id: 3211, code: '1f1ea', title: 'regional indicator symbol letter e' },
  { id: 3212, code: '1f1eb', title: 'regional indicator symbol letter f' },
  { id: 3213, code: '1f1ec', title: 'regional indicator symbol letter g' },
  { id: 3214, code: '1f1ed', title: 'regional indicator symbol letter h' },
  { id: 3215, code: '1f1ee', title: 'regional indicator symbol letter i' },
  { id: 3216, code: '1f1ef', title: 'regional indicator symbol letter j' },
  { id: 3217, code: '1f1f0', title: 'regional indicator symbol letter k' },
  { id: 3218, code: '1f1f1', title: 'regional indicator symbol letter l' },
  { id: 3219, code: '1f1f2', title: 'regional indicator symbol letter m' },
  { id: 3220, code: '1f1f3', title: 'regional indicator symbol letter n' },
  { id: 3221, code: '1f1f4', title: 'regional indicator symbol letter o' },
  { id: 3222, code: '1f1f5', title: 'regional indicator symbol letter p' },
  { id: 3223, code: '1f1f6', title: 'regional indicator symbol letter q' },
  { id: 3224, code: '1f1f7', title: 'regional indicator symbol letter r' },
  { id: 3225, code: '1f1f8', title: 'regional indicator symbol letter s' },
  { id: 3226, code: '1f1f9', title: 'regional indicator symbol letter t' },
  { id: 3227, code: '1f1fa', title: 'regional indicator symbol letter u' },
  { id: 3228, code: '1f1fb', title: 'regional indicator symbol letter v' },
  { id: 3229, code: '1f1fc', title: 'regional indicator symbol letter w' },
  { id: 3230, code: '1f1fd', title: 'regional indicator symbol letter x' },
  { id: 3231, code: '1f1fe', title: 'regional indicator symbol letter y' },
  { id: 3232, code: '1f1ff', title: 'regional indicator symbol letter z' },
  { id: 3233, code: 'e50a', title: 'shibuya' },
  {
    id: 3234,
    code: '1f574-1f3fb-200d-2640-fe0f',
    title: 'woman in suit levitating: light skin tone'
  },
  {
    id: 3235,
    code: '1f574-1f3fb-200d-2642-fe0f',
    title: 'man in suit levitating: light skin tone'
  },
  {
    id: 3236,
    code: '1f574-1f3fc-200d-2642-fe0f',
    title: 'man in suit levitating: medium-light skin tone'
  },
  {
    id: 3237,
    code: '1f574-1f3fd-200d-2642-fe0f',
    title: 'man in suit levitating: medium skin tone'
  },
  {
    id: 3238,
    code: '1f574-1f3fe-200d-2642-fe0f',
    title: 'man in suit levitating: medium-dark skin tone'
  },
  {
    id: 3239,
    code: '1f574-1f3ff-200d-2642-fe0f',
    title: 'man in suit levitating: dark skin tone'
  },
  {
    id: 3240,
    code: '1f574-1f3ff-200d-2640-fe0f',
    title: 'woman in suit levitating: dark skin tone'
  },
  {
    id: 3241,
    code: '1f574-fe0f-200d-2642-fe0f',
    title: 'man in suit levitating'
  },
  {
    id: 3242,
    code: '1f574-fe0f-200d-2640-fe0f',
    title: 'woman in suit levitating'
  },
  {
    id: 3243,
    code: '1f574-1f3fe-200d-2640-fe0f',
    title: 'woman in suit levitating: medium-dark skin tone'
  },
  {
    id: 3244,
    code: '1f574-1f3fd-200d-2640-fe0f',
    title: 'woman in suit levitating: medium skin tone'
  },
  {
    id: 3245,
    code: '1f574-1f3fc-200d-2640-fe0f',
    title: 'woman in suit levitating: medium-light skin tone'
  }
];

export default twemojis;
