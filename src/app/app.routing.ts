import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunListComponent } from './fun-list/fun-list.component';
import { FunNewComponent } from './fun-new/fun-new.component';
import { FunGreenComponent } from './fun-green/fun-green.component';
import { FunToolComponent } from './fun-tool/fun-tool.component';
import { FunEssayComponent } from './fun-essay/fun-essay.component';
import { RegComponent } from './reg/reg.component';
import { HostComponent } from './host/host.component';
import { HostInfoComponent } from './host-info/host-info.component';
import { CertificationComponent } from './certification/certification.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { ForUserComponent } from './common/declaration/for-user/for-user.component';
import { ForPrivacyComponent } from './common/declaration/for-privacy/for-privacy.component';
import { ForDangerComponent } from './common/declaration/for-danger/for-danger.component';
import { ForOurTeamComponent } from './common/declaration/for-our-team/for-our-team.component';
import { ForumComponent } from './forum/forum.component';
import { EditComponent } from './edit/edit.component';
import {ForumDetailsComponent} from './forum-details/forum-details.component';
import { FunGreenDetailsComponent } from './fun-green-details/fun-green-details.component';

const _HomeModule = 'app/home/home.module#HomeModule';
const _FunDetailsModule = 'app/fun-details/fun-details.module#FunDetailsModule';

const routes: Routes = [{
    path: 'funlist/:_name',
    component: FunListComponent
  }, {
    path: 'funnew/:_name',
    component: FunNewComponent
  }, {
    path: 'fungreen/:_name',
    component: FunGreenComponent
  }, {
    path: 'funtool',
    component: FunToolComponent
  }, {
    path: 'funeassay/:_id',
    component: FunEssayComponent
  }, { path: 'reg',
    component: RegComponent
  },  { path: 'host/:_userId',
    component: HostComponent
  },  { path: 'host-info/:_userId',
    component: HostInfoComponent
  },  { path: 'certification/:_userId',
    component: CertificationComponent
  },  { path: 'questionnaire/:_userId',
    component: QuestionnaireComponent
  },  { path: 'toBuy',
    component: ToBuyComponent
  },  { path: 'forUser',
    component: ForUserComponent
  },  { path: 'forOurTeam',
    component: ForOurTeamComponent
  },  { path: 'forDanger',
    component: ForDangerComponent
  },  { path: 'forPrivacy',
    component: ForPrivacyComponent
  }, { path: 'forum',
    component: ForumComponent
  }, { path: 'edit',
    component: EditComponent
  }, { path: 'forumDetails/:_id',
    component: ForumDetailsComponent
  }, { path: 'funGreenDetails/:_id',
    component: FunGreenDetailsComponent
  }, {
  path: 'details/:_fundId',
  loadChildren: _FunDetailsModule
  }, {
  path: '',
  loadChildren: _HomeModule
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
