import Service from "@/core/services/exchangeServices";
import ServiceInteractor from "@/core/useCases/serviceInteractor";
import AppController from "@/infrastructure/controllers/AppController";

import "material-symbols/outlined.css";

export default async function AppPresenter() {
  const service = new Service();
  const serviceInteractor = new ServiceInteractor(service);

  const currencies = await serviceInteractor.getCurrencies();

  return (
    <main>
      <AppController currencies={currencies} />
    </main>
  );
}
