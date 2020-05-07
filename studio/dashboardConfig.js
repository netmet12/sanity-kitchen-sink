export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5eb41c20a2b27c4e03584722',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ffmkkdt9',
                  apiId: 'b4e547a9-4bf6-494e-8fcd-28c0d98a00f3'
                },
                {
                  buildHookId: '5eb41c20bcf4b6b1e3731657',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yqmyjhu3',
                  apiId: '785ebb1a-effc-4b5b-bc2b-209aafa15b8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/netmet12/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yqmyjhu3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
