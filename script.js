const Deck =  [
    // ACES
    {type: 'ACE', name: 'HeartA', value1: 1 , value2: 11  , imgFile: '.\img\2.png '},
    {type: 'ACE', name: 'TilesA', value1: 1 , value2: 11  , imgFile: '.\img\2.png '},
    {type: 'ACE', name: 'CloversA', value1: 1 , value2: 11  , imgFile: '.\img\2.png '},
    {type: 'ACE', name: 'PikesA', value1: 1 , value2: 11  , imgFile: '.\img\2.png'},
    // KINGS
    {type: 'KING', name: 'HeartK', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'KING', name: 'TilesK', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'KING', name: 'CloversK', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'KING', name: 'PikesK', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    // PRINCES
    {type: 'PRINCE', name: 'HeartP', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'PRINCE', name: 'TilesP', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'PRINCE', name: 'CloversP', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'PRINCE', name: 'PikesP', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    //QUEENS
    {type: 'QUEEN', name: 'HeartQ', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'QUEEN', name: 'TilesQ', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'QUEEN', name: 'CloversQ', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'QUEEN', name: 'PikesQ', value1: 10 , value2: null  , imgFile: '.\img\2.png '},
    //TWOS
    {type: 'TWO', name: 'Heart2', value1: 2 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'TWO', name: 'Tiles2', value1: 2 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'TWO', name: 'Clovers2', value1: 2 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'TWOACE', name: 'Pikes2', value1: 2 , value2: null  , imgFile: '.\img\2.png '},
    //THREES
    {type: 'THREE', name: 'Heart3', value1: 3 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'THREE', name: 'Tiles3', value1: 3 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'THREE', name: 'Clovers3', value1: 3 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'THREE', name: 'Pikes3', value1: 3 , value2: null  , imgFile: '.\img\2.png '},
    //FOURS
    {type: 'FOUR', name: 'Heart4', value1: 4 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FOUR', name: 'Tiles4', value1: 4 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FOURACE', name: 'Clovers4', value1: 4 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FOUR', name: 'Pikes4', value1: 4 , value2: null  , imgFile: '.\img\2.png '},
    //FIVES
    {type: 'FIVE', name: 'Heart5', value1: 5 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FIVE', name: 'Tiles5', value1: 5 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FIVE', name: 'Clovers5', value1: 5 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'FIVE', name: 'Pikes5', value1: 5 , value2: null  , imgFile: '.\img\2.png '},
    //SIXES
    {type: 'SIX', name: 'Heart6', value1: 6 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SIX', name: 'Tiles6', value1: 6 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SIX', name: 'Clovers6', value1: 6 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SIX', name: 'Pikes6', value1: 6 , value2: null  , imgFile: '.\img\2.png '},
    //SEVENS
    {type: 'SEVEN', name: 'Heart7', value1: 7 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SEVEN', name: 'Tiles7', value1: 7 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SEVEN', name: 'Clovers7', value1: 7 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'SEVEN', name: 'Pikes7', value1: 7 , value2: null  , imgFile: '.\img\2.png '},
    //EIGHTS
    {type: 'EIGHT', name: 'Heart8', value1: 8 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'EIGHT', name: 'Tiles8', value1: 8 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'EIGHT', name: 'Clovers8', value1: 8 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'EIGHT', name: 'Pikes8', value1: 8 , value2: null  , imgFile: '.\img\2.png '},
    //NINES
    {type: 'NINE', name: 'Heart9', value1: 9 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'NINE', name: 'Tiles9', value1: 9 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'NINE', name: 'Clovers9', value1: 9 , value2: null  , imgFile: '.\img\2.png '},
    {type: 'NINE', name: 'Pikes9', value1: 9 , value2: null  , imgFile: '.\img\2.png '},
    //TENS
    {type: 'TEN', name: 'Heart10', value1: 10 , value2: null , imgFile: '.\img\2.png '},
    {type: 'TEN', name: 'Tiles10', value1: 10 , value2: null, imgFile: '.\img\2.png '},
    {type: 'TEN', name: 'Clovers10', value1: 10 , value2: null , imgFile: '.\img\2.png '},
    {type: 'TEN', name: 'Pikes10', value1: 10 , value2: null , imgFile: '.\img\2.png '},
];

const node = `<picture srcset="${Deck[0].imgFile}"></picture>`; 
document.getElementsByTagName("body").appendChild(node);