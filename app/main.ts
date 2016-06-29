import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { Directive, ElementRef, Input } from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTER_PROVIDERS } from './components/routes.component';

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);
