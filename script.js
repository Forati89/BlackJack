const Deck =  [
    // ACES
    {type: 'ACE', name: 'ClubsA', value1: 1 , value2: 11  , imgFile: 'img/1.png'},
    {type: 'ACE', name: 'SpadesA', value1: 1 , value2: 11  , imgFile: 'img/2.png'},
    {type: 'ACE', name: 'ClubsA', value1: 1 , value2: 11  , imgFile: 'img/3.png'},
    {type: 'ACE', name: 'DiamondA', value1: 1 , value2: 11  , imgFile: '.\img\4.png'},
    // KINGS
    {type: 'KING', name: 'ClubsK', value1: 10 , value2: null  , imgFile: 'img/9.png'},
    {type: 'KING', name: 'SpadesK', value1: 10 , value2: null  , imgFile: 'img/10.png'},
    {type: 'KING', name: 'ClubsK', value1: 10 , value2: null  , imgFile: 'img/11.png'},
    {type: 'KING', name: 'DiamondK', value1: 10 , value2: null  , imgFile: 'img/12.png'},
    // PRINCES
    {type: 'PRINCE', name: 'ClubsP', value1: 10 , value2: null  , imgFile: 'img/13.png'},
    {type: 'PRINCE', name: 'SpadesP', value1: 10 , value2: null  , imgFile: 'img/14.png'},
    {type: 'PRINCE', name: 'ClubsP', value1: 10 , value2: null  , imgFile: 'img/15.png'},
    {type: 'PRINCE', name: 'DiamondP', value1: 10 , value2: null  , imgFile: 'img/16.png'},
    //QUEENS
    {type: 'QUEEN', name: 'ClubsQ', value1: 10 , value2: null  , imgFile: 'img/13.png'},
    {type: 'QUEEN', name: 'SpadesQ', value1: 10 , value2: null  , imgFile: 'img/14.png'},
    {type: 'QUEEN', name: 'ClubsQ', value1: 10 , value2: null  , imgFile: 'img/15.png'},
    {type: 'QUEEN', name: 'DiamondQ', value1: 10 , value2: null  , imgFile: 'img/16.png'},
    //TWOS
    {type: 'TWO', name: 'Clubs2', value1: 2 , value2: null  , imgFile: 'img/49.png'},
    {type: 'TWO', name: 'Spades2', value1: 2 , value2: null  , imgFile: 'img/50.png'},
    {type: 'TWO', name: 'Clubs2', value1: 2 , value2: null  , imgFile: 'img/51.png'},
    {type: 'TWO', name: 'Diamond2', value1: 2 , value2: null  , imgFile: 'img/52.png'},
    //THREES
    {type: 'THREE', name: 'Clubs3', value1: 3 , value2: null  , imgFile: 'img/45.png'},
    {type: 'THREE', name: 'Spades3', value1: 3 , value2: null  , imgFile: 'img/46.png'},
    {type: 'THREE', name: 'Clubs3', value1: 3 , value2: null  , imgFile: 'img/47.png'},
    {type: 'THREE', name: 'Diamond3', value1: 3 , value2: null  , imgFile: 'img/48.png'},
    //FOURS
    {type: 'FOUR', name: 'Clubs4', value1: 4 , value2: null  , imgFile: 'img/41.png'},
    {type: 'FOUR', name: 'Spades4', value1: 4 , value2: null  , imgFile: 'img/42.png'},
    {type: 'FOUR', name: 'Clubs4', value1: 4 , value2: null  , imgFile: 'img/43.png'},
    {type: 'FOUR', name: 'Diamond4', value1: 4 , value2: null  , imgFile: 'img/44.png'},
    //FIVES
    {type: 'FIVE', name: 'Clubs5', value1: 5 , value2: null  , imgFile: 'img/37.png'},
    {type: 'FIVE', name: 'Spades5', value1: 5 , value2: null  , imgFile: 'img/38.png'},
    {type: 'FIVE', name: 'Clubs5', value1: 5 , value2: null  , imgFile: 'img/39.png'},
    {type: 'FIVE', name: 'Diamond5', value1: 5 , value2: null  , imgFile: 'img/40.png'},
    //SIXES
    {type: 'SIX', name: 'Clubs6', value1: 6 , value2: null  , imgFile: 'img/33.png'},
    {type: 'SIX', name: 'Spades6', value1: 6 , value2: null  , imgFile: 'img/34.png'},
    {type: 'SIX', name: 'Clubs6', value1: 6 , value2: null  , imgFile: 'img/35.png'},
    {type: 'SIX', name: 'Diamond6', value1: 6 , value2: null  , imgFile: 'img/36.png'},
    //SEVENS
    {type: 'SEVEN', name: 'Clubs7', value1: 7 , value2: null  , imgFile: 'img/29.png'},
    {type: 'SEVEN', name: 'Spades7', value1: 7 , value2: null  , imgFile: 'img/30.png'},
    {type: 'SEVEN', name: 'Clubs7', value1: 7 , value2: null  , imgFile: 'img/31.png'},
    {type: 'SEVEN', name: 'Diamond7', value1: 7 , value2: null  , imgFile: 'img/32.png'},
    //EIGHTS
    {type: 'EIGHT', name: 'Clubs8', value1: 8 , value2: null  , imgFile: 'img/25.png'},
    {type: 'EIGHT', name: 'Spades8', value1: 8 , value2: null  , imgFile: 'img/26.png'},
    {type: 'EIGHT', name: 'Clubs8', value1: 8 , value2: null  , imgFile: 'img/27.png'},
    {type: 'EIGHT', name: 'Diamond8', value1: 8 , value2: null  , imgFile: 'img/28.png'},
    //NINES
    {type: 'NINE', name: 'Clubs9', value1: 9 , value2: null  , imgFile: 'img/21.png'},
    {type: 'NINE', name: 'Spades9', value1: 9 , value2: null  , imgFile: 'img/22.png'},
    {type: 'NINE', name: 'Clubs9', value1: 9 , value2: null  , imgFile: 'img/23.png'},
    {type: 'NINE', name: 'Diamond9', value1: 9 , value2: null  , imgFile: 'img/24.png'},
    //TENS
    {type: 'TEN', name: 'Clubs10', value1: 10 , value2: null , imgFile: 'img/17.png'},
    {type: 'TEN', name: 'Spades10', value1: 10 , value2: null, imgFile: 'img/18.png'},
    {type: 'TEN', name: 'Clubs10', value1: 10 , value2: null , imgFile: 'img/19.png'},
    {type: 'TEN', name: 'Diamond10', value1: 10 , value2: null , imgFile: 'img/20.png'},
];

const node = Deck[8].imgFile; 
console.log(Deck);
function test(){
    document.getElementById('srctest').src= node;
    document.getElementById('srctest2').src= node;
};
test();
