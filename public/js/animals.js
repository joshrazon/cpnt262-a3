// Attibutions:
// Lorem Picsum
// https://picsum.photos/

export const animals = [

  // REQUIREMENT add image `width` and `height` values; include an image path, if desired.

    {
      id:     237,
      title:  'Puppy',
      credit: 'André Spieker',
      url:    'https://unsplash.com/photos/8wTPqxlnKM4',
      width:  '350',
      height: '210',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     433,
      title:  'Bear',
      credit: 'Thomas Lefebvre',
      url:    'https://unsplash.com/photos/aRXPJnXQ9lU',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     577,
      title:  'Moose',
      credit: 'Thomas Lefebvre',
      url:    'https://unsplash.com/photos/34mvN5nt1ls',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     582,
      title:  'Coyote',
      credit: 'Levi Saunders',
      url:    'https://unsplash.com/photos/NUMlxTPsznM',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     593,
      title:  'Tiger',
      credit: 'Paula Borowska',
      url:    'https://unsplash.com/photos/OM7CvKnhjfs',
      width:  '263',
      height: '350',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     659,
      title:  'Husky',
      credit: 'Alexander Dimitrov',
      url:    'https://unsplash.com/photos/KGy1GFeKBu4',
      width:  '350',
      height: '197',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     718,
      title:  'Wolf',
      credit: 'Josh Felise',
      url:    'https://unsplash.com/photos/mblYxasm0nk',
      width:  '350',
      height: '222',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     783,
      title:  'Monkey',
      credit: 'Damir Kotorić',
      url:    'https://unsplash.com/photos/cSQw4uqF_Hc',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     790,
      title:  'Elk',
      credit: 'rebecca johnston',
      url:    'https://unsplash.com/photos/nuRYwOJryyk',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     837,
      title:  'Bulldog',
      credit: 'Yamon Figurs',
      url:    'https://unsplash.com/photos/2zlxFmByClI',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
      
    },
    {
      id:     1024,
      title:  'Bird',
      credit: 'Мартин Тасев',
      url:    'https://unsplash.com/photos/7ALI0RYyq6s',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     1025,
      title:  'Pug',
      credit: 'Matthew Henry',
      url:    'https://unsplash.com/photos/U5rMrSI7Pn4',
      width:  '350',
      height: '233',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    },
    {
      id:     1074,
      title:  'Big Cat',
      credit: 'Samuel Scrimshaw',
      url:    'https://unsplash.com/photos/sseiVD2XsOk',
      width:  '350',
      height: '233',

      imagePath: function() {

        // Get the word "cat" from title to match the img name
        let cat = this.title.slice(4).toLocaleLowerCase();
        return `${this.id}-${cat}`
      }
    },
    {
      id:     1084,
      title:  'Walrus',
      credit: 'Jay Ruzesky',
      url:    'https://unsplash.com/photos/h13Y8vyIXNU',
      width:  '350',
      height: '250',

      imagePath: function() {
        return `${this.id}-${this.title.toLocaleLowerCase()}`
      }
    }
  ];