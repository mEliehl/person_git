using Domain.Repositories;
using Infra.EF.Contexts;
using Infra.EF.Repositories;
using Microsoft.AspNet.Builder;
using Microsoft.Data.Entity;
using Microsoft.Framework.DependencyInjection;

namespace Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddScoped(typeof(DbContext), typeof(BaseContext));
            services.AddScoped(typeof(IPersonRepository), typeof(PersonRepository));
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

            app.UseMvc();
        }
    }
}
