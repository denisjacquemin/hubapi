#!/usr/bin/ruby

require 'rest_client'

p RestClient.get 'http://localhost:8000/api/properties'


10000.times {

  property = {

      title:       JSON.parse(File.read('seeds/data/title.json')).sample,
      description: JSON.parse(File.read('seeds/data/description.json')).sample,
      price:       JSON.parse(File.read('seeds/data/price.json')).sample.to_i,
      bedroomcount:JSON.parse(File.read('seeds/data/bedroomcount.json')).sample.to_i,
      surface:     JSON.parse(File.read('seeds/data/surface.json')).sample,
      address:     JSON.parse(File.read('seeds/data/address.json')).sample,
      location: {
        lat: JSON.parse(File.read('seeds/data/lat.json')).sample,
        lon: JSON.parse(File.read('seeds/data/lon.json')).sample
      },
      agency: {
        title: JSON.parse(File.read('seeds/data/agency_title.json')).sample,
        logo: "agency_logo.png",
        contact: "T. 061/29.24.14 F. 061/.29.24.15 contact@email.com"
      }

  }

  RestClient.post( 'http://localhost:8000/api/properties', property)
}