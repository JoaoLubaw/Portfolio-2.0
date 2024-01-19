declare type Project = {
  ID: number;
  Name: string;
  Description: string;
  Link: string;
  LinkGit: string;
  LinkBack?: string | undefined;
  GitBack?: string | undefined;
  Imagem: string;
  Tags: string[];
};

declare type Projects = Project[];
