
db.getCollection('category').remove({});

db.getCollection('category').insert(
{
    categId: 1,
    categName: "hard_fact",
    enabled: true
});
db.getCollection('category').insert(
{
    categId: 2,
    categName: "lifestyle",
    enabled: true
});
db.getCollection('category').insert(
{
    categId: 3,
    categName: "introversion",
    enabled: true
});
db.getCollection('category').insert(
{
    categId: 4,
    categName: "passion",
    enabled: true
});

db.getCollection('question').remove({});

db.getCollection('question').insert({
  "questionId": 1,
  "disabled": false,
  "enabled": true,
  "question": "What is your gender?",
  "category": "hard_fact",
  "question_type": {
    "type": "single_choice",
    "options": [
      "male",
      "female",
      "other"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 2,
  "disabled": false,
  "enabled": true,
  "question": "How important is the gender of your partner?",
  "category": "hard_fact",
  "question_type": {
    "type": "single_choice",
    "options": [
      "not important",
      "important",
      "very important"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 3,
  "disabled": false,
  "enabled": true,
  "question": "How important is the age of your partner to you?",
  "category": "hard_fact",
  "question_type": {
    "type": "single_choice_conditional",
    "options": [
      "not important",
      "important",
      "very important"
    ],
    "enable" : {
        "option" : "very important", 
        "id" : 4.0
    }
  }
});
db.getCollection('question').insert({
  "questionId": 4,
  "disabled": true,
  "enabled": true,
  "question": "What age should your potential partner be?",
  "category": "hard_fact",
  "question_type": {
    "type": "number_range",
    "range": {
      "from": 18,
      "to": 140
    }
  }
});
db.getCollection('question').insert({
  "questionId": 5,
  "disabled": false,
  "enabled": true,
  "question": "Do any children under the age of 18 live with you?",
  "category": "hard_fact",
  "question_type": {
    "type": "single_choice",
    "options": [
      "yes",
      "sometimes",
      "no"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 6,
  "disabled": false,
  "enabled": true,
  "question": "How should your potential partner respond to this question?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "yes",
      "sometimes",
      "no"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 7,
  "disabled": false,
  "enabled": true,
  "question": "Could you imagine having children with your potential partner?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "yes",
      "maybe",
      "no"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 8,
  "disabled": false,
  "enabled": true,
  "question": "How should your potential partner respond to this question?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "yes",
      "maybe",
      "no"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 9,
  "disabled": false,
  "enabled": true,
  "question": "What is your marital status?",
  "category": "hard_fact",
  "question_type": {
    "type": "single_choice",
    "options": [
      "never married",
      "separated",
      "divorced",
      "widowed"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 10,
  "disabled": false,
  "enabled": true,
  "question": "How often do your drink alcohol?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "never",
      "once or twice a year",
      "once or twice a month",
      "once or twice a week",
      "I'm drinking my 3rd mojito now, and it's only 11am"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 11,
  "disabled": false,
  "enabled": true,
  "question": "How often do you smoke?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "never",
      "once or twice a year",
      "socially",
      "frequently"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 12,
  "disabled": false,
  "enabled": true,
  "question": "What is your attitude towards drugs?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "I'm completely opposed",
      "I've been know to dabble",
      "drugs enrich my life"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 13,
  "disabled": false,
  "enabled": true,
  "question": "You are looking for...",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "friendship",
      "a hot date",
      "an affair",
      "a short-term relationship",
      "a long-term relationship"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 14,
  "disabled": false,
  "enabled": true,
  "question": "Would you like to get married?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "yes",
      "probably",
      "eventually",
      "no"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 15,
  "disabled": false,
  "enabled": true,
  "question": "What is your ideal living arrangement?",
  "category": "lifestyle",
  "question_type": {
    "type": "single_choice",
    "options": [
      "cohabitation",
      "separate flat / room in the same building",
      "separate flats in the same area",
      "weekend-relationship",
      "long distance relationship"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 16,
  "disabled": false,
  "enabled": true,
  "question": "Do you enjoy spending time alone?",
  "category": "introversion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "most of the time",
      "often",
      "sometimes",
      "rarely",
      "not at all"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 17,
  "disabled": false,
  "enabled": true,
  "question": "When you're alone, do you get lonely quickly?",
  "category": "introversion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "most of the time",
      "often",
      "sometimes",
      "rarely",
      "not at all"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 18,
  "disabled": false,
  "enabled": true,
  "question": "Do you enjoy going on holiday by yourself?",
  "category": "introversion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "most of the time",
      "often",
      "sometimes",
      "rarely",
      "not at all"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 19,
  "disabled": false,
  "enabled": true,
  "question": "I consciously take \"me time\"",
  "category": "introversion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "most of the time",
      "often",
      "sometimes",
      "rarely",
      "not at all"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 20,
  "disabled": false,
  "enabled": true,
  "question": "Should one keep little secrets from one's partner?",
  "category": "introversion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "most of the time",
      "often",
      "sometimes",
      "rarely",
      "not at all"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 21,
  "disabled": false,
  "enabled": true,
  "question": "How often do you think about sex?",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "a few times a day",
      "daily",
      "a few times a week",
      "a few times a month",
      "rarely"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 22,
  "disabled": false,
  "enabled": true,
  "question": "If you were alone on a desert island, how long would you last before pleasuring yourself?",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "less than a day",
      "one day",
      "one week",
      "one month",
      "I'd never do something like that"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 23,
  "disabled": false,
  "enabled": true,
  "question": "How often would you like to have sex with your prospective partner?",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "every day",
      "a few times a week",
      "once a week",
      "every two weeks",
      "infrequently",
      "rarely"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 24,
  "disabled": false,
  "enabled": true,
  "question": "Do you like trying out new things in bed and experimenting?",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "Yes, definitely!",
      "Now and then - why not?",
      "I'd give it a try",
      "I don't know",
      "Absolutely not"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 25,
  "disabled": false,
  "enabled": true,
  "question": "I can enjoy sex without love",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "always",
      "often",
      "sometimes",
      "rarely",
      "never"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 26,
  "disabled": false,
  "enabled": true,
  "question": "For me, a stable relationship is a prerequisite for really good sex",
  "category": "passion",
  "question_type": {
    "type": "single_choice",
    "options": [
      "always",
      "often",
      "sometimes",
      "rarely",
      "never"
    ]
  }
});
db.getCollection('question').insert({
  "questionId": 27,
  "disabled": false,
  "enabled": true,
  "question": "Which picture do you like?",
  "category": "passion",
  "question_type": {
    "type": "single_choice_picture",
    "options": [
      {
        id: "spring",
        pictureUrl: "url"
      }
    ]
  }
});
