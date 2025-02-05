﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BallanceAPI.Models.DbModels
{
    public class TradeOrderType
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<TradeOrder> TradeOrders { get; set; }
    }
}
