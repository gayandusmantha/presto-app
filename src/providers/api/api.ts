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

  completePickUp(id) {
    return this.http.get(this.url_head + 'mpad/courier/compickup/id/' + id)
      .map(res => res.json());
  }

  getExceptions(id) {
    return this.http.get(this.url_head + 'mpad/settings/execption/id/' + id)
      .map(res => res.json());
  }

  pendingDelivery(id) {
    return this.http.get(this.url_head + 'mpad/dispatch/dispatch/id/' + id)
      .map(res => res.json());
  }

  trackingDelivery(id) {
    return this.http.get(this.url_head + 'mpad/dispatch/tracking/id/' + id)
      .map(res => res.json());
  }

  getOneDelivery(id){
    return this.http.get(this.url_head + 'mpad/dispatch/dispatchone/id/' + id)
    .map(res => res.json());
  }

  getOnePick(id) {
    return this.http.get(this.url_head + 'mpad/pickup/pickup/id/' + id)
      .map(res => res.json());
  }

  addVanScan(data) {
    let val = {
      tracking: data,  
      courier: this.save.id      
    }
    return this.http.put(this.url_head + 'mpad/dispatch/vanscan', val)
      .map(res => res.json());
   }

  addPickup(pickup_id, qty, description, tracking_id) {
    let data = {
      pickup_id: pickup_id,           
      description: description,
      tracking_id: tracking_id,
      exception: '-999',
      courier: this.save.id      
    }
    console.log(data);

    return this.http.put(this.url_head + 'mpad/pickup/pickupsummary', data, this.options)
      .map(res => res.json());
  }

  addError(pickup_id, exception) {
    let data = {
      pickup_id: pickup_id, 
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

  completeDelivery(orderid, description) {
    let data = {
      orderid: orderid,           
      description: description,    
      exception: '-999',
      courier: this.save.id      
    }
    console.log(data);

    return this.http.put(this.url_head + 'mpad/dispatch/dispatchsummary', data, this.options)
      .map(res => res.json());
  }

  deliveryError(orderid, exception) {
    let data = {
      orderid: orderid, 
      description: "",  
      exception: exception,    
      courier: this.save.id   
    }
    return this.http.put(this.url_head + 'mpad/dispatch/dispatchsummary', data, this.options)
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
