#!/usr/bin/ruby

require 'rest_client'

p RestClient.get 'http://localhost:8000/api/properties'


1.times {

  property = {

      title:       JSON.parse(File.read('seeds/data/properties/title.json')).sample,
      description: JSON.parse(File.read('seeds/data/properties/description.json')).sample,
      price:       JSON.parse(File.read('seeds/data/properties/price.json')).sample.to_i,
      bedroomcount:JSON.parse(File.read('seeds/data/common/bedroomcount.json')).sample.to_i,
      surface:     JSON.parse(File.read('seeds/data/properties/surface.json')).sample,
      address:     JSON.parse(File.read('seeds/data/properties/address.json')).sample,
      location: {
        lat: JSON.parse(File.read('seeds/data/properties/lat.json')).sample,
        lon: JSON.parse(File.read('seeds/data/properties/lon.json')).sample
      },
      agencyId: JSON.parse(File.read('seeds/data/common/agencyid.json')).sample.to_i
  }

  RestClient.post( 'http://localhost:8000/api/properties', property)
}