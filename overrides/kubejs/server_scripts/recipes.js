ServerEvents.tags("item", event => {

    //添加统一石墨
    event.add('forge:ingots/hop_graphite', 'biggerreactors:graphite_ingot')
    event.add('forge:dusts/hop_graphite', 'biggerreactors:graphite_dust')
  
    //添加橡胶tag
    event.add('forge:rubber', 'thermal:cured_rubber')
  
  })

ServerEvents.recipes(event => {
    
//统一箱子
    event.shaped('minecraft:chest',[
        'XXX',
        'X X',
        'XXX'
    ],{
        X:'#minecraft:planks'
    })

//统一工作台
    event.shapeless('minecraft:crafting_table',['#blue_skies:crafting_tables'])
    event.shapeless('minecraft:crafting_table',['#forge:workbench'])     

//机械动力
    //末影之眼批量缠魂为恶魂之泪
    event.custom({
      "type": "create:haunting",
      "ingredients": [
        {
          "item": "minecraft:ender_eye"
        }
      ],
      "results": [
        {
          "item": "minecraft:ghast_tear",
          "chance": 0.5
        }
      ]
    })

//统一石墨
    event.replaceInput({}, '#forge:ingots/hop_graphite', 'immersiveengineering:ingot_hop_graphite')  

//移除煤炭烧制石墨
    event.remove({id: 'biggerreactors:smelting/graphite_ingot'})  

//石墨精华统一合成
    event.remove({id: 'mysticalagriculture:essence/common/graphite_ingot'})
    event.shaped('immersiveengineering:ingot_hop_graphite', [
        'XXX',
        'X X',
        'XXX'
    ], {
        X: 'mysticalagriculture:graphite_essence'
    })

//通量网络
    //通量核心
        event.remove({output:'fluxnetworks:flux_core'})
        event.shaped('fluxnetworks:flux_core',[
            'ABA',
            'CDE',
            'AFA'
        ],{
            A:'fluxnetworks:flux_dust',
            B:'immersiveengineering:component_electronic_adv',
            C:'mekanism:teleportation_core',
            D:'ae2:singularity',
            E:'enderio:weather_crystal',
            F:'techreborn:superconductor'
        })

    //通量方块
        event.remove({output:'fluxnetworks:flux_block'})
        event.shaped('fluxnetworks:flux_block',[
            'XXX',
            'XYX',
            'XXX'
        ],{
            X:'fluxnetworks:flux_dust',
            Y:'fluxnetworks:flux_core'
        })

    //输入
        event.remove({output:'fluxnetworks:flux_plug'})
        event.shaped('fluxnetworks:flux_plug',[
            ' X ',
            'XYX',
            ' X '
        ],{
            X:'#forge:ingots/hop_graphite',
            Y:'fluxnetworks:flux_core'
        })

    //接入
        event.remove({output:'fluxnetworks:flux_point'})
        event.shaped('fluxnetworks:flux_point',[
            ' X ',
            'XYX',
            ' X '
        ],{
            X:'#forge:ingots/signalum',
            Y:'fluxnetworks:flux_core'
        })

//禁用烧铁得钢
    event.remove({id:'beyond_earth:steel_ingot_blasting'})

//神化宝石粉
    //粉碎轮-机械动力
    event.custom({
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "apotheosis:gem"
        }
      ],
      "results": [
        {
          "item": "apotheosis:gem_dust"
        }
      ],
      "processingTime": 250
    })

    //粉碎机-沉浸工程
    event.custom({
      "type":"immersiveengineering:crusher",
      "secondaries":[],
      "result":{"count":1,"base_ingredient":{"item": "apotheosis:gem_dust"}},
      "input":{"item":"apotheosis:gem"},
      "energy":3000
    })


    //粉碎机-沉浸工程
    event.custom({
        "type":"immersiveengineering:crusher",
        "secondaries":[],
        "result":{"count":1,"base_ingredient":{"item": "ae2:ender_dust"}},
        "input":{"item":"minecraft:ender_pearl"},
        "energy":3000
      })


//附魔灌注台
    event.remove({id:'enchantinginfuser:enchanting_infuser'})
    event.shaped('enchantinginfuser:enchanting_infuser',[
        'DAD',
        'BCB',
        'EAE'
    ],{
        A:'forbidden_arcanus:dark_rune',
        B:'forbidden_arcanus:deorum_ingot',
        C:'minecraft:enchanting_table',
        D:'minecraft:amethyst_block',
        E:'minecraft:crying_obsidian'
    })

    event.remove({id:'enchantinginfuser:advanced_enchanting_infuser'})
    event.shaped('enchantinginfuser:advanced_enchanting_infuser',[
        'DAD',
        'BCB',
        'EAE'
    ],{
        A:'enigmaticlegacy:etherium_ingot',
        B:'mythicbotany:alfsteel_ingot',
        C:'enchantinginfuser:enchanting_infuser',
        D:'minecraft:netherite_block',
        E:'minecraft:crying_obsidian'
    })

//传送石
    event.remove({output: 'waystones:warp_stone'})
    event.shaped('waystones:warp_stone',[
        'ABA',
        'BCB',
        'ABA'
    ],{
        A:'minecraft:amethyst_shard',
        B:'waystones:warp_dust',
        C:'ars_nouveau:summon_focus'
    })

//传送粉尘
event.remove({output: 'waystones:warp_dust'})
event.shapeless('waystones:warp_dust',['ae2:ender_dust','mysticalagriculture:experience_droplet'])

//通量粉尘
    event.custom({
        "type":"extendedcrafting:combination",
        "powerCost":144000,
        "input":{
            "item":"thermal:enderium_dust"
        },
        "ingredients":[
            {
            "item":"thermal:signalum_dust"
            },
            {
            "item":"thermal:signalum_dust"
            },
            {
            "item":"thermal:lumium_dust"
            },
            {
            "item":"thermal:lumium_dust"
            },
            {
            "item":"mekanism:dust_lithium"
            },
            {
            "item":"immersiveengineering:dust_hop_graphite"
            },
            {
            "item":"enderio:ender_crystal_powder"
            },
            {
            "item":"techreborn:chrome_dust"
            }
        ],
        "result":{
            "item":"fluxnetworks:flux_dust",
            "count":9
        }
    })
    
//终极锭
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
            {
                "item": "beyond_earth:cheese"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:diamond"
            },
            {
                "item": "minecraft:emerald"
            },
            {
                "item": "minecraft:lapis_lazuli"
            },
            {
                "item": "minecraft:quartz"
            },
            {
                "item": "minecraft:amethyst_shard"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "minecraft:copper_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:netherite_scrap"
            },
            {
                "item": "irons_spellbooks:arcane_salvage"
            },
            {
                "item": "botania:elementium_ingot"
            },
            {
                "item": "botania:dragonstone"
            },
            {
                "item": "mekanism:fluorite_gem"
            },
            {
                "item": "mekanism:ingot_osmium"
            },
            {
                "item": "thermal:cinnabar"
            },
            {
                "item": "thermal:niter"
            },
            {
                "item": "thermal:sulfur"
            },
            {
                "item": "thermal:tin_ingot"
            },
            {
                "item": "thermal:lead_ingot"
            },
            {
                "item": "thermal:silver_ingot"
            },
            {
                "item": "thermal:nickel_ingot"
            },
            {
                "item": "thermal:sapphire"
            },
            {
                "item": "immersiveengineering:ingot_aluminum"
            },
            {
                "item": "immersiveengineering:ingot_uranium"
            },
            {
                "item": "blue_skies:pyrope_gem"
            },
            {
                "item": "blue_skies:aquite"
            },
            {
                "item": "blue_skies:diopside_gem"
            },
            {
                "item": "blue_skies:charoite"
            },
            {
                "item": "blue_skies:falsite_ingot"
            },
            {
                "item": "blue_skies:ventium_ingot"
            },
            {
                "item": "blue_skies:horizonite_ingot"
            },
            {
                "item": "beyond_earth:desh_ingot"
            },
            {
                "item": "beyond_earth:ostrum_ingot"
            },
            {
                "item": "beyond_earth:calorite_ingot"
            },
            {
                "item": "beyond_earth:ice_shard"
            },
            {
                "item": "enigmaticlegacy:etherium_ingot"
            },
            {
                "item": "undergarden:cloggrum_ingot"
            },
            {
                "item": "undergarden:froststeel_ingot"
            },
            {
                "item": "undergarden:utherium_crystal"
            },
            {
                "item": "undergarden:regalium_crystal"
            },
            {
                "item": "create:zinc_ingot"
            },
            {
                "item": "mysticalagriculture:prosperity_shard"
            },
            {
                "item": "mysticalagriculture:inferium_essence"
            },
            {
                "item": "mysticalagriculture:soulium_dust"
            },
            {
                "item": "tconstruct:cobalt_ingot"
            },
            {
                "item": "tconstruct:earth_slime_crystal"
            },
            {
                "item": "tconstruct:sky_slime_crystal"
            },
            {
                "item": "tconstruct:ichor_slime_crystal"
            },
            {
                "item": "tconstruct:ender_slime_crystal"
            },
            {
                "item": "ae2:certus_quartz_crystal"
            },
            {
                "item": "iceandfire:amythest_gem"
            },
            {
                "item": "forbidden_arcanus:arcane_crystal"
            },
            {
                "item": "forbidden_arcanus:xpetrified_orb"
            },
            {
                "item": "blue_skies:moonstone"
            }
        ],
        "result": {
        "item": "extendedcrafting:the_ultimate_ingot"
        }
    })
    
})
