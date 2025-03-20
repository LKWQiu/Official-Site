import { createRouter, createWebHistory } from 'vue-router';
import ProjectsPage from '../src/views/ProjectsPage.vue';
import AboutPage from '../src/views/AboutPage.vue';
import CertificationsPage from '../src/views/CertificationsPage.vue';
import ExtracurricularsPage from '../src/views/ExtracurricularsPage.vue';
import CareerPage from '../src/views/CareerPage.vue';

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
    path: '/extracurriculars',
    name: 'Extracurriculars',
    component: ExtracurricularsPage,
  },
  {
    path: '/career',
    name: 'Career',
    component: CareerPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
