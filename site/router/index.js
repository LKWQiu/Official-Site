import { createRouter, createWebHistory } from 'vue-router';
import ProjectsPage from '../src/views/ProjectsPage.vue';
import AboutPage from '../src/views/AboutPage.vue';
import CertificationsPage from '../src/views/CertificationsPage.vue';
import CareerPage from '../src/views/CareerPage.vue';
import ExtracurricularsPage from '../src/views/ExtracurricularsPage.vue';

const routes = [
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: CertificationsPage,
  },
  {
    path: '/career',
    name: 'Career',
    component: CareerPage,
  },
  {
    path: '/extracurriculars',
    name: 'Extracurriculars',
    component: ExtracurricularsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
