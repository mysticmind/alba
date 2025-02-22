using System.Collections.Generic;
using System.Threading.Tasks;

namespace Alba.Testing.Samples
{
    public class FormData
    {
        #region sample_write_form_data
        public Task write_form_data(IAlbaHost system)
        {
            var form1 = new Dictionary<string, string>
            {
                ["a"] = "what?",
                ["b"] = "now?",
                ["c"] = "really?"
            };

            return system.Scenario(_ =>
            {
                // This writes the dictionary values to the HTTP
                // request as form data, and sets the content-length
                // header as well as setting the content-type
                // header to application/x-www-form-urlencoded
                _.WriteFormData(form1);
            });
        }
        #endregion
    }
}
