When debugging a Web Application you may encounter an issue with Visual Studio being unable to connect to IIS Express

This issue can happen for a few different reasons and may have different solutions depending on the version of Visual Studio being used, some of which can be found [on this StackOverflow](https://stackoverflow.com/questions/12946476/where-is-the-iis-express-configuration-metabase-file-found) question

In my case, looking in the `.vs` directory and deleting any `applicationhost.config` files in the `config` directories for the associated projects/solution fixed the issue