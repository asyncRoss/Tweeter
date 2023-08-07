class Profile {
  userName: string;
  subs: Profile[];

  constructor(userName: string) {
    this.userName = userName;
    this.subs = [];
  }

  addFollower(profile: Profile) {
    this.subs.push(profile);
  }

  removeFollower(profile: Profile) {
    this.subs = this.subs.filter((sub) => sub.userName !== profile.userName);
  }

  post(tweet: string) {
    this.subs.forEach((profile) => profile.dispatch(this.userName, tweet));
  }

  dispatch(userName: string, tweet: string) {
    console.log(
      `${this.userName} has received ${userName}'s tweet which was: "${tweet}" `
    );
  }
}

const Tim = new Profile("Tim");
const Ashely = new Profile("Ashely");
const Ben = new Profile("Ben");
const Allie = new Profile("Allie");
const Fred = new Profile("Fred");
const Susy = new Profile("Susy");

Tim.addFollower(Allie);
Tim.addFollower(Fred);
Tim.addFollower(Susy);
Allie.addFollower(Tim);
Allie.addFollower(Ashely);
Susy.addFollower(Tim);
Susy.addFollower(Ben);

Tim.post("At the beach, weathers awesome today!");
Allie.post("going to the movies, what should i see tonight?? ");
Susy.post("its my birthday tomorrow!");

console.table({
  Tim: Tim.subs.length,
  Allie: Allie.subs.length,
  Susy: Susy.subs.length,
});

Tim.removeFollower(Fred);
Tim.removeFollower(Susy);
Allie.removeFollower(Ashely);
Susy.addFollower(Ashely);

Tim.post("beach was great, will go again tomorrow");
Allie.post("can i borrow someones netflix password");
Susy.post("love my new iphone");

console.table({
  Tim: Tim.subs.length,
  Allie: Allie.subs.length,
  Susy: Susy.subs.length,
});

//
