export interface Category {
  name: string;
  color: string;
}

export interface Fact {
  id: number;
  text: string;
  source: string;
  category: string;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
  createdIn?: number;
}
