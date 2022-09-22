import React, { Component } from 'react';
import { Cloud, renderSimpleIcon } from 'react-icon-cloud';

// Ugly icon imports for icon cloud
import javascript from 'simple-icons/icons/javascript';
import typescript from 'simple-icons/icons/typescript';
import angular from 'simple-icons/icons/angular';
import git from 'simple-icons/icons/git';
import c from 'simple-icons/icons/c';
import csharp from 'simple-icons/icons/csharp';
import cplusplus from 'simple-icons/icons/cplusplus';
import css3 from 'simple-icons/icons/css3';
import html15 from 'simple-icons/icons/html5';
import latex from 'simple-icons/icons/latex';
import nodedotjs from 'simple-icons/icons/nodedotjs';
import react from 'simple-icons/icons/react';
import threedotjs from 'simple-icons/icons/threedotjs';
import python from 'simple-icons/icons/python';
import r from 'simple-icons/icons/r';
import java from 'simple-icons/icons/java';
import amazonaws from 'simple-icons/icons/amazonaws';
import firebase from 'simple-icons/icons/firebase'
import azuredevops from 'simple-icons/icons/azuredevops';
import excel from 'simple-icons/icons/microsoftexcel';
import word from 'simple-icons/icons/microsoftword';
import powerpoint from 'simple-icons/icons/microsoftpowerpoint';
import sql from 'simple-icons/icons/sqlite';
import dotnet from 'simple-icons/icons/dotnet';
import ansible from 'simple-icons/icons/ansible'
import kubernetes from 'simple-icons/icons/kubernetes'
import redhatopenshift from 'simple-icons/icons/redhatopenshift'
import gitlab from 'simple-icons/icons/gitlab'

// Canvas options for icon cloud
const tagCanvasOptions = {
  clickToFront: 500,
  depth: 1,
  imageScale: 2,
  initial: [0.1, -0.1],
  outlineColour: '#0000',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false,
};

// Render icons to work with icon cloud API
const icons = [javascript, typescript, angular, git, c, csharp, cplusplus, css3, html15, latex, nodedotjs, react,
    threedotjs, python, r, java, amazonaws, firebase, azuredevops, excel, word, powerpoint, sql, dotnet, ansible,
    kubernetes, redhatopenshift, gitlab
  ].map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    })
});

class LanguageCloud extends Component {
    render() {
        return (
            <main>
                <Cloud options={tagCanvasOptions}>
                    { icons }
                </Cloud>
            </main>
        )
    }
}

export default LanguageCloud;