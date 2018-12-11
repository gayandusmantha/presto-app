import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../providers/config';
import 'rxjs/add/operator/map';
import { SaveProvider } from '../../providers/save/save';
@Injectable()
export class ApiProvider {
  url_head: string = AppConfig.apiUrl;
  header = new Headers({ "X-API-KEY": "x#KTjR{+9'9=x2#r" });
  options = new RequestOptions({ headers: this.header });
  constructor(public http: Http, public save: SaveProvider) {
    console.log('Hello ApiProvider Provider');
  }

  login(id) {
    return this.http.get(this.url_head + 'mpad/courier/courier/id/' + id)
      .map(res => res.json());
  }

  pendingPickUp(id) {
    return this.http.get(this.url_head + 'mpad/courier/cpickup/id/' + id)
      .map(res => res.json());
  }

  getExceptions(id) {
    return this.http.get(this.url_head + 'mpad/settings/execption/id/' + '1')
      .map(res => res.json());
  }

  getOnePick(id) {
    return this.http.get(this.url_head + 'mpad/pickup/pickup/id/' + id)
      .map(res => res.json());
  }

  addPickup(pickup_id, fid, pack, description, tracking_id) {
    let data = {
      pickup_id: pickup_id,
      fid: fid,
      pack: pack,
      description: description,
      tracking_id: tracking_id,
      exception: '-999',
      courier: this.save.id,
      date: ''
    }
    console.log(data);

    return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
      .map(res => res.json());
  }

  addError(pickup_id, exception) {
    let data = {
      pickup_id: pickup_id,
      fid: '',
      pack: '',
      description: '',
      tracking_id: '',
      exception: exception,
      courier: this.save.id,
      date: ''
    }
    return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
      .map(res => res.json());
  }

  adDeviceId(fid, deviceid) {
    let data = {
      fedexid: fid,
      device: deviceid
    }
    return this.http.put(this.url_head + 'mpad/courier/device', data, this.options)
      .map(res => res.json());
  }

}
