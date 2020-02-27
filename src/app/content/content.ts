import { getJSON } from './JSONReader';
import { init } from './ui/init';

(async () => {
  const json = await getJSON();
  init(json);
})();
