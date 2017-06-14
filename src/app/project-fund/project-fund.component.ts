import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-fund',
  templateUrl: './project-fund.component.html',
  styleUrls: ['./project-fund.component.css'],
  providers: [ProjectService]
})
export class ProjectFundComponent implements OnInit {

  projectId: string;
  projectToFund;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = (urlParameters['id']);
    });
    this.projectToFund= this.projectService.getProjectById(this.projectId);
  }

  submitFund(newName: string, newEmail: string, newAmount: string){
    var amountRaised = parseInt(this.projectToFund.fundRaised) + parseInt(newAmount);
    console.log(this.projectId);
    console.log(this.projectToFund);
    console.log(newAmount);
    console.log(amountRaised);
  }

}
