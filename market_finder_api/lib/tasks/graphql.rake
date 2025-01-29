namespace :graphql do
    desc "Dump the GraphQL schema"
    task schema: :environment do
      schema_path = Rails.root.join("app/graphql/schema.graphql")
      File.write(schema_path, MarketFinderApiSchema.to_definition)
      puts "GraphQL schema dumped to #{schema_path}"
    end
  end
  