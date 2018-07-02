import { default as something } from './old/old.module';

const arrow = () => {
  console.log(`I'm so arrow`);
  console.log(`And using ${something}`);
};

export { arrow };