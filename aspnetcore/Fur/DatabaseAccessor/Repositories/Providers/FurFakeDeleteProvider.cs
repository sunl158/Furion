﻿using Fur.DatabaseAccessor.Entities;

namespace Fur.DatabaseAccessor.Providers
{
    public class FurFakeDeleteProvider : IFakeDeleteProvider
    {
        public string Property => nameof(DbEntity.IsDeleted);

        public object FlagValue => true;
    }
}