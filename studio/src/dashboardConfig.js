export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5f7b7228d8d6e90b947267',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-4gbtvm2w',
                  apiId: '06bbe388-f603-4f21-9e5b-6ee97b5feacd'
                },
                {
                  buildHookId: '5e5f7b7299df88fc556fa112',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web-uhzpvbva',
                  apiId: '7b83ff7a-86ea-40fd-8b96-a8c342fd4633'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enzoforte/sanity-gatsby-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-test-web-uhzpvbva.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
